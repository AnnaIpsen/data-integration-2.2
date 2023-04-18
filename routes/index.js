const express = require('express');
const router = express.Router();

const conw = require('../controllers/controllersworld')

/*
 * Setup REST endpoints
 */

// Getting cities
router.get('/cities', conw.getCities, function (req, res) {
  res.json({ cities: res.locals.cities });
});

// Create city
router.post('/cities', conw.postCity, function (req, res) {
  res.json({ newCity: res.locals.newcity })
});

// Getting city
router.get('/cities:city', function (req, res) {

});

// Update city
router.patch('/cities:city', function (req, res) {

});

// Delete city
router.delete('/cities:city', function (req, res) {

});

module.exports = router;