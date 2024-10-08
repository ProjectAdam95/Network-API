const mongoose = require('mongoose');

// Connect to MongoDB database, either using environment variable or local DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social_network_db', {
  useNewUrlParser: true,    // Use the new URL parser for MongoDB connection
  useUnifiedTopology: true, // Use the new unified topology engine for connections
});

// Export the database connection
module.exports = mongoose.connection;
