// backend/order_mdware.js
const orderValidator = (req, res, next) => {
  const { name, address, paymentMode, cardType, cardHolderName, cardNumber, cardExpiry, cardCVV } = req.body;

  // Basic validation for required fields
  if (!name || !address || !paymentMode) {
    return res.status(400).json({ error: "Name, Address, and Payment Mode are required" });
  }

  // If payment mode is "card", additional card details are required
  if (paymentMode === "card") {
    if (!cardType || !cardHolderName || !cardNumber || !cardExpiry || !cardCVV) {
      return res.status(400).json({ error: "All card details are required for card payment" });
    }
  }

  // If everything is valid, pass control to the next handler
  next();
};

export default orderValidator;