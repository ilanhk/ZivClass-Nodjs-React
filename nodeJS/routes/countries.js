const express = require('express');
const router = express.Router();

const {getCountries, getCountry} = require('../controller/countries.js');

router.get('/', getCountries);
router.get('/:id', getCountry);

module.exports = router;