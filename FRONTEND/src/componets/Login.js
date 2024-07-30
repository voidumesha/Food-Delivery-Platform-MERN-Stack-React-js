const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
require('dotenv').config();

// Load environment variables from .env file
dotenv.config();

// Access environment variables
const url = process.env.MONGODB_URL;
const dbName = process.env.DATABASE_NAME;



// Function to check login credentials
async function checkLoginCredentials(email, password) {
    try {
        // Create a new MongoClient
        const client = new MongoClient(url);

        // Connect to the MongoDB server
        await client.connect();

        // Select the database
        const db = client.db(dbName);

        // Select the collection
        const collection = db.collection('customers');

        // Find the user with the given username and password
        const user = await collection.findOne({ email, password });

        // Close the connection
        await client.close();

        // Return true if the user exists, false otherwise
        return !!user;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Usage example
const email = 'example@gmail.com';
const password = 'example_password';

checkLoginCredentials(email, password)
    .then((result) => {
        console.log('Login credentials:', result);
    })
    .catch((error) => {
        console.error('Error:', error);
    });