const { validationResult } = require('express-validator');
const carsServices = require('../services/cars_services');



// cars_controller.js
const getAllCars = async (req, res) => {
    try {
        const cars = await carsServices.GetAllCars();
        res.render('viewCars', { cars }); // Render EJS view instead of sending JSON
    } catch (error) {
        res.status(500).send("Error retrieving cars data");
    }
};

const updateCarsPage = async (req, res) => {
        try {
            const cars = await carsServices.GetAllCars();
            res.render('updateCars', { cars });
        } catch (error) {
            res.status(500).json({ error: "Error retrieving cars data", details: error.message });
        }
    };


const getCarById = async (req, res) => {
    try {
        const result = await carsServices.GetCarById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addNewCarForm = (req, res) => {
    res.render('addCar');
};

// Function to handle the submission of the new car form
const addNewCar = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('addCar', { errors: errors.array() });
    }

    try {
        const { Model, Year, Make } = req.body;
        await carsServices.AddNewCar(Model, Year, Make);
        res.redirect('/cars/view');
    } catch (error) {
        res.render('addCar', { error: "An error occurred while adding the car." });
    }
};

// Function to render the form for updating a car
const updateCarForm = async (req, res) => {
    try {
        const cars = await carsServices.GetAllCars();
        res.render('viewCars', { cars }); // Render EJS view instead of sending JSON
    } catch (error) {
        res.status(500).send("Error retrieving cars data");
    }
};

// Function to handle the submission of the update car form
const updateCar = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('updateCars', { errors: errors.array() });
    }

    try {
        const carId = req.params.id;
        await carsServices.UpdateCarDetails(carId, req.body);
        res.redirect('/cars/view');
    } catch (error) {
        res.render('updateCars', { error: "An error occurred while updating the car." });
    }
};

// Function to handle car deletion
const deleteCar = async (req, res) => {
    try {
        const carId = req.params.id;
        await carsServices.DeleteCar(carId);
        res.redirect('/cars/view');
    } catch (error) {
        res.render('error', { error: "An error occurred while deleting the car." });
    }
};

const rentCarPage = async (req, res) => {
    try {
        const availableCars = await carsServices.GetAllCars();
        res.render('rent-a-car', { availableCars });
    } catch (error) {
        console.error('Error fetching cars:', error);
        res.status(500).send('Server error');
    }
};

// cars_controller.js

const searchCars = async (req, res) => {
    try {
        const name = req.query.name; // Retrieve the search query
        const cars = await carsServices.searchCarsByName(name);
        res.render('carSearchResults', { cars });
    } catch (error) {
        res.status(500).send("Error retrieving search results");
    }
};





module.exports = { addNewCar, getAllCars, getCarById,addNewCarForm, deleteCar ,updateCar, updateCarForm,rentCarPage, searchCars, updateCarsPage};
