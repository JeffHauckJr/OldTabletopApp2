const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  race: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    default: 1
  },
  stats: {
    str: Number,
    dex: Number,
    con: Number,
    int: Number,
    wis: Number,
    cha: Number
  },
  background: {
    type: String
  },
  alignment: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // 🔗 Reference to the user who owns this character
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Character', characterSchema);