const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register Route
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword
  });

  await newUser.save();
  res.json({ message: 'User registered successfully' });
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ userId: user._id }, 'your_secret_key');
    res.json({ message: `Welcome ${user.username}`, token });
  } else {
    res.status(401).json({ message: 'Incorrect credentials' });
  }
});

module.exports = router;
