const { validationResult } = require("express-validator");
const { CreateCustomer, GetAllCustomers, UpdateCustomerProfile, DeleteCustomer, GetCustomerById } = require("../services/customers_services");


const createCustomer = async (req, res) => {
    try {
        const customerData = req.body; // Extracting data from the form
        const result = await CreateCustomer(customerData);
        res.render('addCustomer', { result });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getAllCustomers = async (req, res) => {
    try {
        const result = await GetAllCustomers();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCustomerById = async (req, res) => {
    try {
        const result = await GetCustomerById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCustomerProfile = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        const customerId = req.params.id;
        const updateData = req.body;
        const result = await UpdateCustomerProfile(customerId, updateData);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCustomer = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        const customerId = req.params.id;
        const result = await DeleteCustomer(customerId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createCustomer, getAllCustomers, getCustomerById, updateCustomerProfile, deleteCustomer };
