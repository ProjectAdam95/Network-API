const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./data');

connection.once('open', async () => {
  console.log('Connected to MongoDB');

  // Clear existing data
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Insert mock users and thoughts
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.log('Database seeded successfully!');
  process.exit(0);
});
