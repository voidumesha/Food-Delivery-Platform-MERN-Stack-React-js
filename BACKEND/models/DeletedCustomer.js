// deletedCustomer.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deletedCustomerSchema = new Schema({
    fname: String,
    lname: String,
    nic: String,
    phone: String,
    email: String,
    no: String,
    street1: String,
   
    city: String,
    password: String,
    confirmPassword: String,
    deletedAt: {
        type: Date,
        default: Date.now
    }
});

const DeletedCustomer = mongoose.model("DeletedCustomer", deletedCustomerSchema);

module.exports = DeletedCustomer;