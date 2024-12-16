// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Initialize environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON requests

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to SpendSherpa API!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
