const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Merch = require('./models/Merch');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); 
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/tbe-store', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// API Endpoints

// GET all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Merch.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Merch.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new product
app.post('/api/products', async (req, res) => {
  const product = new Merch({
    name: req.body.name,
    price: req.body.price,
    images: req.body.images,
    category: req.body.category,
    purchaseUrl: req.body.purchaseUrl
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    // This is the key change: log the specific validation error from Mongoose
    console.error("Mongoose validation error:", err.message);
    res.status(400).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});