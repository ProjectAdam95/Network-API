const { Schema, model } = require('mongoose');

// Define schema for users
const userSchema = new Schema({
  // Username field, unique and required, trimmed to remove extra spaces
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  // Email field, required, unique, and validated with regex for proper format
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  // Array of thought IDs, referencing the Thought model
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  // Array of friend IDs, referencing the User model (self-referencing)
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
},
{
  // Include virtuals in JSON responses
  toJSON: {
    virtuals: true,
  },
  // Disable virtual `id` field
  id: false,
});

// Virtual property to get the number of friends
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Create User model based on the schema
const User = model('User', userSchema);

module.exports = User;
