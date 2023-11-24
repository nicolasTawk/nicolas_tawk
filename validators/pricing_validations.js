const { body } = require('express-validator');

const validatePricing = [
    body('CarID').notEmpty().withMessage('CarID is required'),
    body('DailyRate').isNumeric().withMessage('Daily rate should be a number')
    // Add more validators as needed
];

module.exports = {
    validatePricing
};
