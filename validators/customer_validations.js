const { body, param } = require('express-validator');

const validateNewCustomer = [
    body('FirstName').notEmpty().withMessage('First name is required'),
    body('LastName').notEmpty().withMessage('Last name is required'),
    body('Email').isEmail().withMessage('Valid email is required'),
    body('Phone').notEmpty().withMessage('Phone number is required')
   
];

const validateUpdateCustomer = [
    body('FirstName').optional().notEmpty().withMessage('First name cannot be empty'),
    body('LastName').optional().notEmpty().withMessage('Last name cannot be empty'),
    body('Email').optional().isEmail().withMessage('Valid email is required'),
    body('Phone').optional().notEmpty().withMessage('Phone number cannot be empty')

  ];
  
  const validateDeleteCustomer = [
    param('id').isNumeric().withMessage('ID must be a valid number')
   
  ];
  
  module.exports = {
    validateNewCustomer,
    validateUpdateCustomer,
    validateDeleteCustomer
  };