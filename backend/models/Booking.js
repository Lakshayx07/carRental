const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  startDate: { type: Date },
  endDate: { type: Date },
  totalPrice: { type: Number },
  fullName: { type: String },
  email: { type: String },
  phone: { type: String },
  imgUrl: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
