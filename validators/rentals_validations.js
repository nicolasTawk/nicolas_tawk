const { body } = require('express-validator');

const validateNewRental = [
    body('CarID').notEmpty().withMessage('CarID is required'),
    body('CustomerID').notEmpty().withMessage('CustomerID is required'),
    body('RentalStartDate').notEmpty().isDate().withMessage('Valid RentalStartDate is required')
    // Add more validators as needed
];

module.exports = {
    validateNewRental
};
