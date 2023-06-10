const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
// the pre-save middleware function is defined to update the "updatedAt" field whenever the document is modified and saved
productSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the product model
module.exports = mongoose.model('Product', productSchema);
