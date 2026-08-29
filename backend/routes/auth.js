const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const User = require('../models/User');
const router = express.Router();

const validateRegister = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  });
  return schema.validate(data);
};

router.post('/register', async (req, res, next) => {
  try {
    const { error } = validateRegister(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).json({ error: 'User already registered.' });

    user = new User({ username: req.body.username, email: req.body.email, password: req.body.password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (err) { next(err); }
});

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: 'Invalid email or password.' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Invalid email or password.' });

    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.json({ token, username: user.username });
  } catch (err) { next(err); }
});

module.exports = router;