const mongoose = require('mongoose');
const { Schema } = mongoose;

const merchSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  images: [{
    type: String,
    required: true
  }],
  category: {
    type: String,
    enum: ['Shirts', 'Hoodies', 'Tank tops', 'Vinyls', 'Hats/Beanies', 'Flags'],
    required: true
  },
  purchaseUrl: {
    type: String,
    required: false,
    match: [/^https?:\/\/.*/, 'is not a valid URL']
  }
});

const Merch = mongoose.model('Merch', merchSchema);

module.exports = Merch;