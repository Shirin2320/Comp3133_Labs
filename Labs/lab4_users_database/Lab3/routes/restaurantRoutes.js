const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant'); // Match the filename exactly

// Route to get restaurants where cuisine is "Delicatessen" and city is NOT Brooklyn
router.get('/restaurants/Delicatessen', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({ 
            cuisine: "Delicatessen", 
            city: { $ne: "Brooklyn" } 
        }).select('name cuisine city -_id').sort({ name: 1 });

        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
