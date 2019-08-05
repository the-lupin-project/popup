const mongoose, { Schema } = require('mongoose');

const sessionSchema = new Schema({
  cookieId: {
    type: String,
    unique: true,
    required: true,
  },
  createdAt: {
    type: Date,
    expires: 120,
    default: Date.now,
  }
});

module.exports = mongoose.model('Session', sessionSchema);