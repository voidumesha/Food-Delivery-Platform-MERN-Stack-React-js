const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "Error connecting to MongoDB:"));
connection.once("open", () => {
    console.log("Mongodb Connection Success!");
});

app.post('/cart/addcart', (req, res) => {
  const foodItem = req.body;
  console.log('Food item received:', foodItem);

  // Add logic to handle the food item (e.g., save to database)
  
  res.status(200).json({ message: 'Food item added to cart successfully' });
});
const customerRoutes = require('./routes/customers');
app.use('/Customers', customerRoutes);

const foodRoutes = require('./routes/food');
app.use('/Food', foodRoutes);

const addCartRoutes = require('./routes/addCart');
app.use('/CartItem', addCartRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
