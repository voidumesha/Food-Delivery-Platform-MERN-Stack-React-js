const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
    nic: {
        type: String, // Assuming NIC is stored as a string
        ref: 'newcustomers', // Reference to the newcustomers model
        required: true
    },
    foodItems: [{ 
        foodId: {
            type: Schema.Types.ObjectId,
            ref: 'secondfoods',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        }
    }]
});

const CartItem = mongoose.model("CartItem", cartItemSchema);

module.exports = CartItem;