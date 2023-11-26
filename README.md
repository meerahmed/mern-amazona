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
18. Create Sign in Screen
    1.  create sign in form
    2.  add email and password
    3.  add sign in button
    4.  Set Urlredirect using new URLSearchParams(search).get('redirect');
19. Connect to MongoDB Database
    1.  Create atlas mongodb database
    2.  install local mongodb database
    3.  npm install mongoose (npm install mongoose --save)
    4.  connect to mongodb database (https://www.mongodb.com/products/tools/compass)
        1. local mongoo url: mongodb://localhost:27017/
    5.  amozona45 and meercse45
    6.  npm install dotenv for enviroment variabe
    7.  mongodb+srv://meercse45:amazona45@cluster0.mjwue4y.mongodb.net/amazona?retryWrites=true&w=majority

# Mongodb Server and compass download

    1.  https://www.mongodb.com/try/download/community
    2.  https://www.mongodb.com/products/tools/compass

20. Seed Sample data
    1.  Create Product model
    2.  Create User Model
    3.  Create Seed route
    4.  Use Route in server.js
    5.  Seed Sample product
21. Seed Sample User
    1.  Create User Model
    2.  Seed Sample Users
    3.  Create User Routes
    4.  Npm install bcryptjs for hasing password
22. Create Signin Backend API
    1. create signin api (install npm i express-async-hander for asynchHander error handler in server.js)
    2. npm install jsonwebtoken (use jwt.sign(user,secretkey,expiretime))
    3. define generateToken
    4. Install ARC (Advanced REST client) in Chrome for rest api test
23. Complete Sign In Action
    1.  Handle Submit action
    2.  Save token in store and local storage
    3.  Show use name in header
    4.  Install npm i react-toastify for toast message from react
24. Create Shipping Screen
    1.  Create a from for shipping information
    2.  Handle Save Information of shipping
    3.  add checkout wizerd bar
    4.  Clear Cart After sign out
25. Create sign up Screen
    1. Create input form for sign up
    2. Handle Submit
    3. Create backend api
26. Implement Select payment method screen
    1.  Create input forms
    2.  Handle submit
27. Place Order Screen
    1.  show cart items,payment and address
    2.  handle place order action
    3.  create order api
28. Implement Place order Action
    1.  Handle place order action
    2.  Create order create api
