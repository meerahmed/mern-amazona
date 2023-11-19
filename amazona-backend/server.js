import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  // res.status(404).send({ message: 'Product not found ! Please Try new' });
  res.send(data.products);
});
app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found ! Please Try new' });
  }
});
// read port from process or 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve is running at http://localhost:${port}`);
});
