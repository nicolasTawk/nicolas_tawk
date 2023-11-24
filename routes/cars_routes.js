const express = require('express');
const router = express.Router();
const carsController = require('../controllers/cars_controller');
const { validateNewCar, validateUpdateCar, validateDeleteCar } = require('../validators/cars_validations');

router.post('/addNewCar', validateNewCar, carsController.addNewCar);
router.get('/', carsController.getAllCars);
router.get('/:id', carsController.getCarById);
router.put('/:id', validateUpdateCar, carsController.updateCarDetails);
router.delete('/:id', validateDeleteCar, carsController.deleteCar);

module.exports = router;