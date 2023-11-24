const pricingServices = require('../services/pricing_services');

const setPricing = async (req, res) => {
    try {
        const result = await pricingServices.setCarPricing(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const fetchDailyRates = async (req, res) => {
    try {
        const dailyRates = await pricingServices.getDailyRates();
        res.json(dailyRates);
    } catch (error) {
        console.error('Error in fetchDailyRates:', error);
        res.status(500).send('Internal Server Error');
    }
};

const fetchCarDailyRate = async (req, res) => {
    const carId = req.params.carId;
    try {
        const dailyRate = await pricingServices.getCarDailyRate(carId);
        if (dailyRate) {
            res.json(dailyRate);
        } else {
            res.status(404).send('Car not found');
        }
    } catch (error) {
        console.error('Error in fetchCarDailyRate:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    setPricing,
    fetchDailyRates,
    fetchCarDailyRate
};
