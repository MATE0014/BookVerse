import dotenv from "dotenv";
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'; // ✅ Import CORS
import orderRoutes from './orderRoutes.js';

dotenv.config();

const app = express();

// ✅ Use CORS middleware (allow all origins)
app.use(cors());

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Register the order routes
app.use('/api', orderRoutes);

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
