const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Define schema for thoughts
const thoughtSchema = new Schema({
  // Text of the thought, required and limited to 280 characters
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  // Timestamp for when the thought was created, formatted via getter
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toLocaleString(),
  },
  // Username of the thought's creator, required
  username: {
    type: String,
    required: true,
  },
  // Array of reactions associated with the thought, using reactionSchema
  reactions: [reactionSchema],
},
{
  // Include virtuals and getters in JSON responses
  toJSON: {
    virtuals: true,
    getters: true,
  },
  // Disable virtual `id` field
  id: false,
});

// Virtual property to get the number of reactions
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Create Thought model based on the schema
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
