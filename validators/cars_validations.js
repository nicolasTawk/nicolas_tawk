const { body, param } = require('express-validator');

const validateNewCar = [
  body('Make').notEmpty().withMessage('Make is required'),
  body('Model').notEmpty().withMessage('Model is required'),
  body('Year').notEmpty().withMessage('Year is required')
    .isDate({ format: 'YYYY-MM-DD' }).withMessage('Year must be a valid date in YYYY-MM-DD format')
    
];

const validateUpdateCar = [
  body('Make').optional().notEmpty().withMessage('Make cannot be empty'),
  body('Model').optional().notEmpty().withMessage('Model cannot be empty'),
  body('Year').optional().isDate({ format: 'YYYY-MM-DD' }).withMessage('Year must be a valid date in YYYY-MM-DD format')
 
];

const validateDeleteCar = [
  param('id').isNumeric().withMessage('ID must be a valid number')
];

module.exports = {
  validateNewCar,
  validateUpdateCar,
  validateDeleteCar
};


