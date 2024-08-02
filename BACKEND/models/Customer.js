const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    fname : {
        type : String,
        required: true
    },

    lname : {
        type : String,
        required: true
    },

  nic : {
    type :String,
    required :true
  },
    phone : {
        type : String,
        required :true
    },

    email : {
        type : String,
    },

    no : {
        type : String,
        required: true
    },

    street1 : {
        type : String,
        required: true
    },
    street2 : {
        type : String,
        required: false
    },

    city : {
        type : String,
        required: true
    },

    imageUrl: {
        type:String,
        required :true
    },

    
    password : {
        type :String,
        required : true
    },

    confirmPassword :{
        type :String,
    }

})

const Customer = mongoose.model("NewCustomers", customerSchema);

module.exports = Customer;