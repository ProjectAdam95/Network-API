const { Schema, Types } = require('mongoose');

// Define schema for reactions
const reactionSchema = new Schema({
  // Unique ID for each reaction, generated automatically
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  // Body of the reaction, required and limited to 280 characters
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  // Username of the person who created the reaction, required
  username: {
    type: String,
    required: true,
  },
  // Timestamp for when the reaction was created, formatted via getter
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toLocaleString(),
  },
},
{
  // Include getters in JSON responses
  toJSON: {
    getters: true,
  },
  // Disable virtual `id` field
  id: false,
});

module.exports = reactionSchema;
