const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  breed: String,
  age: Number,
  // Add more fields as needed
});

module.exports = mongoose.model('Pet', petSchema);