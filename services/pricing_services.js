const db = require('../database/db');

const setCarPricing = async (pricingData) => {
    const [ CarID, DailyRate ] = pricingData;
    const result = await db.query('INSERT INTO Pricing (CarID, DailyRate) VALUES (?, ?) ON DUPLICATE KEY UPDATE DailyRate = ?', [CarID, DailyRate, DailyRate]);
    return result;
};

const getDailyRates = async () => {
    const sql = "SELECT Cars.CarsID, Cars.Make, Cars.Model, Cars.Year, Pricing.DailyRate FROM Cars JOIN Pricing ON Cars.CarsID = Pricing.CarID;";
    try {
        const results = await db.query(sql);
        return results;
    } catch (error) {
        console.error('Error in getDailyRates:', error);
        throw error;
    }
};

const getCarDailyRate = async (carId) => {
    const sql = "SELECT Cars.CarsID, Cars.Make, Cars.Model, Cars.Year, Pricing.DailyRate FROM Cars JOIN Pricing ON Cars.CarsID = Pricing.CarID WHERE Cars.CarsID = ?;"
    
    try {
        const results = await db.query(sql, [carId]);
        return results; 
    } catch (error) {
        console.error('Error in getCarDailyRate:', error);
        throw error;
    }
};

module.exports = {
    setCarPricing,
    getDailyRates,
    getCarDailyRate
};
