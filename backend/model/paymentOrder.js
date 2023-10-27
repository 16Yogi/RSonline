const mongoose = require('mongoose');

// Define a schema for payment orders
const paymentOrderSchema = new mongoose.Schema({
  order_id: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  receipt: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a Mongoose model using the schema
const PaymentOrder = mongoose.model('PaymentOrder', paymentOrderSchema);

module.exports = PaymentOrder;
