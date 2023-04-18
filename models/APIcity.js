const mongoose = require("mongoose");

const schema = mongoose.Schema({
    oldid: Number,
    name: String,
    countrycode: String,
    district: String,
    population: Number
});

module.exports = mongoose.model("City", schema, 'city');