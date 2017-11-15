var mongoose = require('mongoose');

var favoriteSchema = new mongoose.Schema({
    favoriteUID: String, //favoriteUserUID-facilityId
    favoriteUserUID: String,
    name: String,
    address: String,
    postal: String,
    publicOrPrivate: String,
    lat : Number,
    lng : Number,
    facilityType : String, 
    description: String,
    openingHours: String,
    peakHours: String,
    serviceProvided: String,
    ownerUID: { type: String, ref: 'ProUser'},
    healthcareGroup: String,
    contactNumber: String,
    email: String,
    detectedAddress: String
});

module.exports = mongoose.model('Favorite', favoriteSchema);