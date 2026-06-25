const express = require('express');
const router = express.Router();
const User = require('../models/user');

// POST - Naya user save karega
router.post('/adduser', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User saved!", user: newUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - Saare user dekhne ke liye
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;