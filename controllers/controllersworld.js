const mongoose = require("mongoose");
const APICity = require("../models/APICity");

module.exports = {

    getCities: async function (req, res, next) {

        try {
            // read from designated countries
            let cities = await APICity.find( { countrycode: { "$in" : ["DNK", "NOR", "ISL", "SWE", "FIN"]} } );
            // save the read in middleware variable
            res.locals.cities = cities;
            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    },

    postCity: async function (req,res, next) {
        try {
            // first find new sequenceno
            let cursor = await APICity.find().sort( { oldid: -1 } ).limit(1);
            let seq = cursor[0].oldid + 1;

            // then create obj
            let city = new APICity({
                oldid: seq,
                name: req.body.name,
                countrycode: req.body.countrycode,
                district: req.body.district,
                population: req.body.population
            });

            // then insert
            let newcity = await APICity.create(city);
            // create middleware variable
            res.locals.newcity = newcity;
            next();

        } catch (error) {
            res.status(400).json(error.message);
        }
    }
};