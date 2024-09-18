const mongoose = require('mongoose');

// Define URL schema
const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true
  },
  hashedUrl: {
    type: String,
    required: true
  },
  clicks: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the model
const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
