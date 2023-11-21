import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
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
// Start Router
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
// End Router
// end custom router in server js use app.use fro productRouter
// app.get('/api/products', (req, res) => {
//   // res.status(404).send({ message: 'Product not found ! Please Try new' });
//   res.send(data.products);
// });
// app.get('/api/products/slug/:slug', (req, res) => {
//   const product = data.products.find((x) => x.slug === req.params.slug);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product not found ! Please Try new' });
//   }
// });
// app.get('/api/products/:id', (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product not found ! Please Try new' });
//   }
// });
// end custom router in server js
// read port from process or 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve is running at http://localhost:${port}`);
});
