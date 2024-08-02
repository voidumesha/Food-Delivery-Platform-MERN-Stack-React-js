const express = require("express");
const router = express.Router();
const customerController = require("../controller/customerController");

// Register a new customer
router.post("/register", customerController.registerCustomer);

// Fetch all customers
router.get("/fetchc", customerController.fetchCustomers);

// Update customer details
router.put("/updateCus/:nic", customerController.updateCustomer);

// Delete a customer
router.delete("/deleteCus/:nic", customerController.deleteCustomer);

// Login customer
router.post("/loginCus", customerController.loginCustomer);

// Get a single customer
router.get("/getUser/:nic", customerController.getCustomer);

// Search customer by NIC
router.get("/searchByNIC/:nic", customerController.searchByNIC);

module.exports = router;
