const Food = require("../models/food");




// Controller for updating food by ID
exports.updateFoodById = async (req, res) => {
  const foodId = req.params.id;
  const { foodname, price, description, imageUrl } = req.body;

  try {
    // Find the food item by ID
    const existingFood = await Food.findById(foodId);

    // Check if the food item exists
    if (!existingFood) {
      return res.status(404).json({ error: "Food item not found" });
    }

    // Update the properties of the existing food item
    existingFood.foodname = foodname;
    existingFood.price = price;
    existingFood.description = description;
    existingFood.imageUrl = imageUrl; // Assuming imageUrl is the Firebase URL

    // Save the updated food item
    const updatedFood = await existingFood.save();

    res.status(200).json({ 
      message: "Food updated successfully", 
      data: updatedFood
    });
  } catch (error) {
    console.error("Error updating food:", error);
    res.status(500).json({ error: "An error occurred while updating food" });
  }
};


// Controller for adding food
exports.addFood = async (req, res) => {
  try {
    const { foodname, price, description, imageUrl } = req.body;

    if (!foodname || !price || !description || !imageUrl) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newFood = new Food({
      foodname,
      price,
      description,
      imageUrl
    });

    const savedFood = await newFood.save();

    res.status(200).json({ 
      message: "Food added successfully", 
      data: savedFood
    });
  } catch (error) {
    console.error("Error adding food:", error);
    res.status(500).json({ error: "An error occurred while adding food" });
  }
};

// Controller for fetching all foods
exports.getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    console.error("Error fetching foods:", error);
    res.status(500).json({ error: "An error occurred while fetching foods" });
  }
};

// Controller for fetching a single food by ID
exports.getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ error: "Food item not found" });
    }
    res.json(food);
  } catch (error) {
    console.error("Error fetching food:", error);
    res.status(500).json({ error: "An error occurred while fetching the food item" });
  }
};

// Controller for searching foods by name
exports.searchFoods = async (req, res) => {
  try {
    const { foodName } = req.query;
    const regex = new RegExp(foodName, 'i');
    const foods = await Food.find({ foodname: regex });
    res.json(foods);
  } catch (error) {
    console.error("Error searching for foods:", error);
    res.status(500).json({ error: "An error occurred while searching for foods" });
  }
};

// Controller for deleting food by ID
exports.deleteFoodById = async (req, res) => {
    const idToDelete = req.params.id;
  
    try {
      const deletedFood = await Food.findByIdAndDelete(idToDelete);
  
      if (!deletedFood) {
        return res.status(404).json({ status: 'Food not found' });
      }
  
      res.status(200).json({ status: 'Food deleted successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ status: 'Error with deleting food', error: err.message });
    }
  };
