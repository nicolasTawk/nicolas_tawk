const rentalServices = require('../services/rental_services');

const createRental = async (req, res) => {
    try {
        const result = await rentalServices.createRental(req.body);
        res.redirect('/rental-success');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getRentalCost = async (req, res) => {
    try {
        const cost = await rentalServices.calculateRentalCost(req.params.rentalId);
        res.status(201).json(cost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCustomersByCarId = async (req, res) => {
    try {
        const carId = req.params.carId;
        const customers = await rentalServices.getCustomersByCarId(carId);
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCarsRentedByCustomer = async (req, res) => {
    try {
        const customerId = req.params.customerId;
        const cars = await rentalServices.getCarsRentedByCustomer(customerId);
        res.json(cars);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    createRental,
    getRentalCost,
    getCustomersByCarId,
    getCarsRentedByCustomer,
    
};
