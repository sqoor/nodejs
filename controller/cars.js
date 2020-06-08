const { getAllCars } = require('../model/cars');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('CARS: GETALL');
    res.send(getAllCars);
});


module.exports = router;
