const express = require("express");
const router = express.Router();
const cartController = require("../controller/cartController");


// Updated route definition
router.post("/addItem", cartController.addToCart);

router.get("/totalPrice/:nic/:cartItemId", cartController.calculateTotalPrice);

module.exports = router;