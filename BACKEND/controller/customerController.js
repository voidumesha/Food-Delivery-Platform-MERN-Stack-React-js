const Customer = require("../models/Customer");
const DeletedCustomer = require("../models/DeletedCustomer");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Register a new customer
exports.registerCustomer = async (req, res) => {
    const { fname, lname, nic, phone, email, no, street1, street2, city,imageUrl, password} = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newCustomer = new Customer({
            fname,
            lname,
            nic,
            phone,
            email,
            no,
            street1,
            street2,
            city,
            imageUrl,
            password: hashedPassword,
        });

        await newCustomer.save();
        res.json("Customer Added");
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

// Fetch all customers
exports.fetchCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

// Update customer details
exports.updateCustomer = async (req, res) => {
    let Nic = req.params.nic;
    const { fname, lname, nic, phone, email, no, street1, street2, city,imageUrl, password, confirmPassword } = req.body;
    const updateCustomer = {
        fname,
        lname,
        nic,
        phone,
        email,
        no,
        street1,
        street2,
        city,
        imageUrl,
        password,
        confirmPassword,
    };

    try {
        const updatedCustomer = await Customer.findOneAndUpdate({ nic: Nic }, updateCustomer, { new: true });

        if (!updatedCustomer) {
            return res.status(404).send({ status: "Customer not found" });
        }

        res.status(200).send({ status: "Customer Updated successfully", updatedCustomer });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error with updating data" });
    }
};

// Delete a customer
exports.deleteCustomer = async (req, res) => {
    const nicToDelete = req.params.nic;

    try {
        const customerToDelete = await Customer.findOne({ nic: nicToDelete });

        if (!customerToDelete) {
            return res.status(404).json({ status: 'Customer not found' });
        }

        const deletedCustomer = new DeletedCustomer({
            ...customerToDelete.toObject(),
            deletedAt: new Date()
        });

        await deletedCustomer.save();
        await Customer.findOneAndDelete({ nic: nicToDelete });

        res.status(200).json({ status: 'Customer Deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ status: 'Error with deleting customer', error: err.message });
    }
};

// Upload profile image for a customer
exports.uploadProfileImage = async (req, res) => {
    try {
        const nic = req.params.nic;
        const imageUrl = req.file.path;

        await Customer.findOneAndUpdate({ nic }, { profileImage: imageUrl });

        res.json({ imageUrl });
    } catch (error) {
        console.error('Error uploading image', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Login customer
exports.loginCustomer = async (req, res) => {
    try {
        const { nic, password } = req.body;

        if (!nic || !password) {
            return res.status(400).json({ message: "NIC and password are required" });
        }

        if (nic === "200011401134" && password === "12345678@") {
            const adminToken = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET_KEY);
            return res.status(200).json({ message: "Admin login successful", token: adminToken });
        }

        const user = await Customer.findOne({ nic });

        if (!user) {
            return res.status(401).json({ message: "Invalid NIC or password" });
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ message: "Invalid NIC or password" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);
        res.status(200).json({ message: `${nic} login successfully` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

// Get a single customer
exports.getCustomer = async (req, res) => {
    let Nic = req.params.nic;

    try {
        const customer = await Customer.findOne({ nic: Nic });

        if (!customer) {
            return res.status(404).json({ status: 'Customer not found' });
        }

        res.status(200).send({ status: "Customer fetched", customer });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "Error with customer", error: err.message });
    }
};
exports.searchByNIC = async (req, res) => {
    try {
        const { nic } = req.params;
        const customer = await Customer.findOne({ nic });

        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.status(200).json({ message: "Customer data found", customer });
    } catch (error) {
        console.error("Error searching for customer by NIC", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};