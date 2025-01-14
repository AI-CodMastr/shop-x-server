import express from 'express';
import data from './data/data.json' assert { type: 'json' };
import cores from 'cores';

const app = express();
const PORT = 4000;

app.use(cores());
// Routes

app.get('/categories', (req, res) => {
  res.status(200).json(data.categories);
});

app.get('/products', (req, res) => {
  res.status(200).json(data.products);
});

app.get('/saleProducts', (req, res) => {
  res.status(200).json(data.saleProducts);
});

app.get('/notification', (req, res) => {
  res.status(200).json(data.notifications);
});

app.get('/cartItems', (req, res) => {
  res.status(200).json(data.cart);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});