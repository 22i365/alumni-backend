const express = require('express');
const router = express.Router();
const Alumni = require('../models/Alumni');  // Ensure your model is correctly named

// Route to get all alumni data with optional filters
router.get('/', async (req, res) => {
    try {
        // Destructure query parameters from req.query
        const { name, yearOfGraduation, sector, higherStudies, institutionName, sortOrder } = req.query;

        const query = {};

        // Update field names to match your data
        if (name) query['Name of the alumni'] = new RegExp(name, 'i');  // Case-insensitive search for name
        if (yearOfGraduation) query['Year of Graduation'] = yearOfGraduation;
        if (sector) query['Sector'] = new RegExp(sector, 'i');  // Case-insensitive search for sector
        if (higherStudies) query['Higher Studies'] = higherStudies === 'Yes';  // Treat higherStudies as Boolean
        if (higherStudies === 'Yes' && institutionName) query['Institution_name'] = new RegExp(institutionName, 'i');
        
       

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // Only add institutionName if higherStudies is "Yes"

        const alumni = await Alumni.find(query);  // Fetch data from the database

        // Sort alumni by graduation year if specified
        if (sortOrder) {
            alumni.sort((a, b) => sortOrder === 'asc' ? a['Year of Graduation'] - b['Year of Graduation'] : b['Year of Graduation'] - a['Year of Graduation']);
        }

        res.json(alumni);  // Return the data as JSON
    } catch (error) {
        console.error('Error fetching alumni data:', error);
        res.status(500).json({ message: 'Error fetching alumni data', error });
    }
});

module.exports = router;  // Export the router
