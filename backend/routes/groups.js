const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const StudyGroup = require('../models/StudyGroup');

router.post('/', auth, async (req, res, next) => {
  try {
    const group = new StudyGroup({
      name: req.body.name,
      description: req.body.description,
      createdBy: req.user._id,
      members: [req.user._id]
    });
    await group.save();
    res.status(201).json(group);
  } catch (err) { next(err); }
});

module.exports = router;