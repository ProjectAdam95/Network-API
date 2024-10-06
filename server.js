const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config();


mongoose.set('strictQuery', true);  


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social_network_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

db.once('open', () => {
  console.log('Successfully connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
