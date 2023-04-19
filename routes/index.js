const express = require('express');
const router = express.Router();

const conw = require('../controllers/controllersworld')

/*
 * Setup REST endpoints
 */

router.get('/countries', conw.getCountries, function (req, res) {
  // variable from middleware
  res.json({ countries: res.locals.countries });
});

// Getting cities
router.get('/cities', conw.getCities, function (req, res) {
  res.json({ cities: res.locals.cities });
});

// Getting cities by country
router.get('/citiescountry/:country', conw.getCitiesByCountry, function (req, res) {
  // variable from middleware
  res.json({ cities: res.locals.cities });
});

// Create city
router.post('/cities', conw.postCity, function (req, res) {
  res.json({ newCity: res.locals.newcity })
});

// Getting city
router.get('/cities/:city', conw.getCity, function (req, res) {
  res.json({ city: res.locals.city });
});

// Update city
router.patch('/cities/:city', function (req, res) {

});

// Delete city
router.delete('/cities/:city', conw.deleteCity, function (req, res) {
  let msg = `deleted ${res.locals.deleted} city`;
  res.status(201).json({ message: msg });
});

module.exports = router;