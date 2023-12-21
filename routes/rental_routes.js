const express = require('express');
const rentalController = require('../controllers/rentals_controller');
const router = express.Router();
const {validateNewRental} = require('../validators/rentals_validations');

router.post('/createrental',validateNewRental, rentalController.createRental);
router.get('/cost/:rentalId', rentalController.getRentalCost);
router.get('/car/:carId/customers', rentalController.getCustomersByCarId);
router.get('/customer/:customerId/cars', rentalController.getCarsRentedByCustomer);
router.post('/create-rental', rentalController.createRental);



module.exports = router;
