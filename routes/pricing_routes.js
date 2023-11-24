const express = require('express');
const pricingController = require('../controllers/pricing_controller');
const router = express.Router();
const {validatePricing} = require('../validators/pricing_validations');

router.post('/setpricing',validatePricing, pricingController.setPricing);
router.get('/daily-rates', pricingController.fetchDailyRates);
router.get('/daily-rate/:carId', pricingController.fetchCarDailyRate);

module.exports = router;
