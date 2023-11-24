const { validationResult } = require('express-validator');
const carsServices = require('../services/cars_services');

const addNewCar = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).json({errors: errors.array()});
        }
        const {Model, Year, Make} = req.body;
        const result = await carsServices.AddNewCar(Model, Year, Make);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllCars = async (req, res) => {
    try {
        const result = await carsServices.GetAllCars();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
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

const updateCarDetails = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        const carId = req.params.id;
        const updateData = req.body;
        const result = await carsServices.UpdateCarDetails(carId, updateData);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const deleteCar = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        const carId = req.params.id;
        const result = await carsServices.DeleteCar(carId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addNewCar, getAllCars, getCarById, updateCarDetails, deleteCar };
