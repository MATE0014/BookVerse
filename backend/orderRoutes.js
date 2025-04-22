// backend/routes/orderRoutes.js
import express from 'express';
const router = express.Router();
import orderValidator  from './order_mdware.js'; // Import the middleware
import Order from './order.js'; // Import the Order model  

// POST route to save the order
router.post('/orders', orderValidator, async (req, res) => {
  const orderData = req.body;

  try {
    // Create a new order document
    const newOrder = new Order(orderData);

    // Save the order to MongoDB
    const savedOrder = await newOrder.save();

    // Send back a success response
    res.status(200).json({ message: 'Order successfully processed', order: savedOrder });
  } catch (err) {
    console.error('Error saving order:', err);
    res.status(500).json({ error: 'Error saving order', details: err });
  }
});

export default router;