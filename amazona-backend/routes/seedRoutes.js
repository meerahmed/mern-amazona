import express from 'express';
import Product from '../models/productModels.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  // first of all remove the previous data
  await Product.removeAllListeners({});
  const seedProduct = await Product.insertMany(data.products);
  res.send({ seedProduct });
});

export default seedRouter;
