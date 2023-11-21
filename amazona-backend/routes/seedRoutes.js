import express from 'express';
import Product from '../models/productModels.js';
import data from '../data.js';
import User from '../models/userModels.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  // first of all remove the previous data
  await Product.deleteMany({});
  const seedProduct = await Product.insertMany(data.products);
  await User.deleteMany({});
  const userData = await User.insertMany(data.users);

  res.send({ seedProduct, userData });
});

export default seedRouter;
