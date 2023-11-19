# MERN AMAZONA

# vs code extension for fast development

    1.prettier
    format on save, single quote, default formatter,bracketfaircolor
    2.esLint
    3.JavaScript (ES6) snippets
    4.ES7 React/Redux/React-Native/JS

# LESSION

1.  Introduction
2.  Install Tools
3.  Create React App
4.  Create Git Repository
5.  List Products
    1.Create Product Array 2. Add Product Image 3. Render Products 4. Style Products
6.  Add Page Router
    1.npm i react-router-dom
    2.create router for home screen
    3.create router for product screen
7.  Create Node.JS Server
    1.  run npm init in root folder
    2.  Update package.json set type: module
    3.  Add .js to imports
    4.  npm install express
    5.  create server.js(install nodemon )
    6.  add start command as node backend/server.js
    7.  require express
    8.  create route for / return backend is ready.
    9.  move products.js from frontend to backend
    10. create route for /api/products
    11. return products
    12. run npm start
8.  Fetch Product form Backend
    1.  Set Proxy in package.json
    2.  npm install axios (axios-http.com)
    3.  use state hook (https://react.dev/reference/react/useState)
    4.  use effect hook
    5.  use reducer hook
9.  Manage state by Reducer Hook
    1.  Define reducer
    2.  update fetch data
    3.  get state from useReducer
    4.  install use reducer logger for log the state of reducer
10. Add bootstrapp UI Framework
    1.  npm install react-bootstrap bootstrap
    2.  update App.js
    3.  install react-bootstarp-route for linkcontainer instead of link
11. Create Product and Rating Component
    1.  Create product component
    2.  Create Rating Componet
    3.  Use Rating component in Product Component
12. Create Product Details Screen
    1.  Fetch product from backend with ths slug
    2.  Create 3 column for image , info, action
    3.  using react-helmet-async for dynamic browser title
13. Create Loading Spinner and Message Show
    1.  Create Loading Component
    2.  Use spinner Component
    3.  Create Message Component
    4.  Create utils.js to getError function
14. Implement Add to Cart (React Context)
    1. Create React Context (https://react.dev/learn/passing-data-deeply-with-context)
    2. Define Reducer
    3. Create store provider
    4. implement add to cart button click handler
15. Complete Add to Cart
    1.  Check exits item in the
    2.  Check count in stock in backend
16. Create Cart Scrren
    1.  Create 2 column for list and subtotal
    2.  Display item list
    3.  Crate Action column for inc dec and delte and for chekcout
17. Complete Cart Screen
    1.  Click hander for inc/dec item
    2.  click hander for remove item
    3.  click hander for checkout
    4.  homescreen click handler for add to card and out of stock
