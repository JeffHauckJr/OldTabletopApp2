const mongoose = require('mongoose')

const campaignSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        dm: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // references the User model
            required: true
          },
          players: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User' // each player is a user too
          }],
          createdAt: {
            type: Date,
            default: Date.now
          }
    }
)

module.exports = mongoose.model('Campaign', campaignSchema);