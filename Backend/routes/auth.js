const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');


router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10); // Create a salt (adds randomness)
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password

    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({message: "Invalid email or password"});
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({message: 'Invalid email or password'});
    }

    const token = JWT.sign(
      {userId: user._id},
      process.env.JWT_Secret,
      {expiresIn: '1hr'}
    )

    res.status(200).json({message: 'Login Successful'});

  } catch (err) {
    res.status(500).json({error: 'Server error', details: err});
  }
})

module.exports = router;