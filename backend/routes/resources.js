const express = require('express');
const Joi = require('joi');
const router = express.Router();
const auth = require('../middleware/auth');
const Resource = require('../models/Resource');
const upload = require('../middleware/upload'); 

const validateResource = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().required(),
    subject: Joi.string().valid('Statistics', 'Computer Networking', 'Machine Learning', 'Web Development', 'Other').required()
  });
  return schema.validate(data);
};

router.post('/', [auth, upload.single('file')], async (req, res, next) => {
  try {
    const { error } = validateResource(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const resource = new Resource({
      ...req.body,
      fileUrl: `uploads/${req.file.filename}`,
      uploader: req.user._id
    });
    await resource.save();
    res.status(201).send(resource);
  } catch (err) { next(err); }
});

router.get('/', async (req, res, next) => {
  try {
    const resources = await Resource.find().populate('uploader', 'username');
    res.json(resources);
  } catch (err) { next(err); }
});

module.exports = router;
