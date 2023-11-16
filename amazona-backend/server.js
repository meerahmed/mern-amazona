import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});
// read port from process or 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve is running at http://localhost:${port}`);
});
