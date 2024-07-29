const express = require("express");
const router = express.Router();
const cartController = require("../controller/cartController");

// Route for adding an item to the cart
router.post("/addItem/:nic/:foodId", cartController.addToCart);
router.get("/totalPrice/:nic/:cartItemId", cartController.calculateTotalPrice);

module.exports = router;