const express = require('express');
const router = express.Router();
const carsController = require('../controllers/cars_controller');
const { validateNewCar, validateUpdateCar, validateDeleteCar } = require('../validators/cars_validations');

router.get('/add-car', (req, res) => {
    res.render('addCar');
});

// Route to handle the submission of the new car form
router.get('/view', carsController.getAllCars);
router.post('/addNewCar', validateNewCar, carsController.addNewCar);
router.get('/', carsController.getAllCars);
router.get('/:id', carsController.getCarById);
// cars_routes.js
router.get('/rent-a-car', carsController.rentCarPage);


// Route to handle the submission of the new car form
// Route to display form for adding a new car
router.get('/add', carsController.addNewCarForm);

// Route to handle the submission of the new car form
router.post('/add', validateNewCar, carsController.addNewCar);

// Route to display form for updating a car
router.get('/update/:id', carsController.updateCarForm);

// Route to handle the submission of the update car form
router.post('/update/:id', validateUpdateCar, carsController.updateCar);

// Route to handle car deletion
router.post('/delete/:id', validateDeleteCar, carsController.deleteCar);
router.get('/search-cars', carsController.searchCars);

module.exports = router;