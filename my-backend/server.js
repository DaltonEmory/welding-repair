// server.js
require('dotenv').config(); // Loads environment variables from a .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware to enable CORS and JSON body parsing
app.use(cors());
app.use(express.json());

// A simple test route to confirm the server is running
app.get('/', (req, res) => {
  res.send('Server is running.');
});

// Set the port from environment or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
