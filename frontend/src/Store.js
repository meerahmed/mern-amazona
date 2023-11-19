import { createContext, useReducer } from 'react';

export const Store = createContext();
const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      //ADDD TO CARD

      const newItem = action.payload;
      const exitsItem = state.cart.cartItems.find((x) => x._id === newItem._id);
      const cartItems = exitsItem
        ? state.cart.cartItems.map((item) =>
            item._id === exitsItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    case 'REMOVE_CART_ITEM': {
      const removeItem = action.payload;
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id != removeItem._id
      );
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
};
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
