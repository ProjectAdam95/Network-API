const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config();

// Set Mongoose to use strict query mode
mongoose.set('strictQuery', true);

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social_network_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware to handle JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use application routes
app.use(routes);

// Start server once database connection is established
db.once('open', () => {
  console.log('Successfully connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
