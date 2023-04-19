const mongoose = require("mongoose");

const schema = mongoose.Schema({
    code: String,
    name: String,
    continent: String,
    region: String,
    surfacearea: Number,
    indepyear: Number,
    population: Number,
    lifeexpectancy: Number,
    gnp: Number,
    gnpold: Number,
    localname: String,
    governtmentform: String,
    headofstate: String,
    capital: Number,
    code2: String
});

module.exports = mongoose.model("Country", schema, 'country');