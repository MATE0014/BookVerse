// backend/models/Order.js
import mongoose from 'mongoose'; // Import mongoose to interact with MongoDB

// Define the schema for the order
const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  paymentMode: { type: String, required: true },
  cardType: { type: String },
  cardHolderName: { type: String },
  cardNumber: { type: String },
  cardExpiry: { type: String },
  cardCVV: { type: String },
}, { timestamps: true }); // Automatically adds `createdAt` and `updatedAt` fields

// Create the model for the Order
const Order = mongoose.model('Order', orderSchema);

export default Order;