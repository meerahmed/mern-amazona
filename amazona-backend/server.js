import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRoute from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conneted to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
//the form data will be conver to json object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//the form data will be conver to json object
//API FOR PAYPAL CLIENT ID
app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
// Start Router
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRoute);
app.use('/api/orders', orderRouter);

//Error handeri middleware
app.use((err, req, res, next) => {
  res.status(501).send({ message: err.message });
});
// End Router

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve is running at http://localhost:${port}`);
});
