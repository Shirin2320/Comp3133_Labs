const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    restaurant_id: String,
    name: String,
    cuisine: String,
    city: String,
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant;
