const express = require('express');
const router = express.Router();
const customersController = require('../controllers/costomers_controllers');
const { validateNewCustomer, validateUpdateCustomer, validateDeleteCustomer } = require('../validators/customer_validations');

router.post('/createcustomer', validateNewCustomer, customersController.createCustomer);
router.get('/', customersController.getAllCustomers);
router.get('/:id', customersController.getCustomerById);
router.put('/:id', validateUpdateCustomer, customersController.updateCustomerProfile);
router.delete('/:id', validateDeleteCustomer, customersController.deleteCustomer);

module.exports = router;
