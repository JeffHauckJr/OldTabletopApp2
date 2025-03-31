const express = require('express');
const router = express.Router();
const Campaign = require('../models/campaign');
const verifyToken = require('../middleware/middleware');
const campaign = require('../models/campaign');

// POST /api/campaigns
router.post('/', verifyToken, async (req, res) => {
    const { name } = req.body;
    const userId = req.user.userId; // pulled from the verified token
  
    try {
      const newCampaign = new Campaign({
        name,
        dm: userId,
        players: [] // start with an empty player list
      });
  
      await newCampaign.save();
  
      res.status(201).json({
        message: 'Campaign created successfully',
        campaign: newCampaign
      });
  
    } catch (err) {
      res.status(500).json({
        message: 'Failed to create campaign',
        error: err.message
      });
    }
  });
  
  module.exports = router;