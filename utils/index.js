const express = require('express');
const db = require('../config/connection');
const routes = require('../routes');

const cwd = process.cwd();  // Get current working directory

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware to handle URL-encoded and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use application routes
app.use(routes);

// Start server when database connection is established
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});
