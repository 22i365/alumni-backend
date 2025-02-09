// const mongoose = require('mongoose');

// const alumniSchema = new mongoose.Schema({
//     name: String,
//     location: String,
//     yearOfGraduation: Number,
//     sector: String,
//     higherStudies: String,
//     institutionName: { type: String, required: function() { return this.higherStudies === 'Yes'; } }
// });

// const Alumni_details = mongoose.model('Alumni_details', alumniSchema);

// module.exports = Alumni_details;




const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
    name: { type: String, required: true },  // Matches "Name of the alumni" in DB
    email: { type: String, required: true },  // Matches "Email ID"
    yearOfGraduation: { type: Number, required: true },  // Matches "Year of Graduation"
    programme: { type: String },  // Matches "Name of the Programme"
    linkedin: { type: String },  // Matches "Linkedin URL"
    jobTitle: { type: String },  // Matches "Current Job Title"
    sector: { type: String },  // Matches "Sector"
    higherStudies: { type: String, enum: ["Yes", "No"], required: true },  // Matches "Higher Studies"
    institutionName: { 
        type: String, 
        required: function() { return this.higherStudies === 'Yes'; }  // Required only if Higher Studies is "Yes"
    }
}, { collection: 'Alumni_details' });  // Ensures Mongoose maps to the correct collection

const Alumni_details = mongoose.model('Alumni_details', alumniSchema);

module.exports = Alumni_details;
