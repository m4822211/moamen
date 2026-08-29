const mongoose = require('mongoose');

const studyGroupSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  sharedResources: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('StudyGroup', studyGroupSchema);