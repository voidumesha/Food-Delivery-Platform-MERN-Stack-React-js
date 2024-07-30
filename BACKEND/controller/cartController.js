const CartItem = require('./models/cartItem');
const food = require('../models/food');


exports.addToCart = async (req, res) => {
    try {
        const { nic, foodId, quantity } = req.body;

        
        if (!nic || !foodId || !quantity) {
            return res.status(400).json({ error: "All fields are required" });
        }

         
        let cartItem = await CartItem.findOne({ nic});

  
        if (!cartItem) {
            cartItem = new CartItem({
                nic,
                foodItems: [{ foodId, quantity }]
            });
        } else {
           
            const existingFoodItem = cartItem.foodItems.find(item => item.foodId.equals(foodId));

            if (existingFoodItem) {
                
                existingFoodItem.quantity += quantity;
            } else {
                
                cartItem.foodItems.push({ foodId, quantity });
            }
        }

        
        const savedCartItem = await cartItem.save();

        res.status(201).json({ 
            message: "Item added to cart successfully", 
            data: savedCartItem 
        });
    } catch (error) {
        console.error("Error adding item to cart:", error);
        res.status(500).json({ error: "An error occurred while adding item to cart" });
    }
};

exports.calculateTotalPrice = async (req, res) => {
    try {
        const { cartItemId } = req.params;

        // Find the cart item by ID and populate the foodItems with details
        const cartItem = await CartItem.findById(cartItemId).populate('foodItems.foodId');

        if (!cartItem) {
            return res.status(404).json({ error: "Cart item not found" });
        }

        let totalPrice = 0;

        // Iterate through each item in the foodItems array and calculate the total price
        cartItem.foodItems.forEach(item => {
            const price = item.foodId.price;
            const quantity = item.quantity;
            const itemTotalPrice = price * quantity;
            totalPrice += itemTotalPrice;
        });

        // Respond with the total price
        res.status(200).json({ total_price: totalPrice });
    } catch (error) {
        console.error("Error calculating total price:", error);
        res.status(500).json({ error: "An error occurred while calculating total price" });
    }
};