require('dotenv').config(); // Ye sabse upar
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connect - ab env se aayega
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));

// Routes - tu already routes folder use kar rahi hai
app.use('/api', require('./routes/user'));

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});