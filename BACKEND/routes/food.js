const express = require("express");
const router = express.Router();
const foodController = require("../controller/foodController");

// Middleware to parse JSON data
router.use(express.json());

// Routes
router.post("/add", foodController.addFood);
router.get("/fetch", foodController.getAllFoods);
router.get("/fetch/:id", foodController.getFoodById);
router.get("/search", foodController.searchFoods);
router.put("/edit/:id", foodController.updateFoodById);
router.delete('/deleteFood/:id', foodController.deleteFoodById);

module.exports = router;
