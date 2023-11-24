const db = require('../database/db');

const createRental = async (rentalData) => {
    const [CarID, CustomerID ] = rentalData;
    const currentDate = new Date().toISOString().split('T')[0];

    const result = await db.query('INSERT INTO Rentals (CarID, CustomerID, RentalStartDate) VALUES (?, ?, ?)', [CarID, CustomerID, currentDate]);
    return result;
}


const calculateRentalCost = async (rentalId)=>  {
    const [rental] = await db.query('SELECT * FROM Rentals WHERE RentalID = ?', [rentalId]);
    if (!rental.length) {
        throw new Error('Rental not found');
    }
    const [pricing] = await db.query('SELECT DailyRate FROM Pricing WHERE CarID = ?', [rental.CarID]);
    if (!pricing.length) {
        throw new Error('Pricing not found for this car');
    }
    const dailyRate = pricing.DailyRate;
    const startDate = new Date(rental.RentalStartDate);
    const endDate = new Date(rental.RentalEndDate || new Date());
    const durationInDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    return durationInDays * dailyRate;
}

const getCustomersByCarId = async (CarID) =>{

    try{

        const sql = "SELECT Customers.CustomerID, Customers.FirstName, Customers.LastName, Customers.Email, Customers.Phone, Customers.Adress  FROM Customers INNER JOIN Rentals ON Customers.CustomerID = Rentals.CustomerID WHERE Rentals.CarID = ?; "
        
    
        const result = await db.query(sql,[CarID]);
        return result;
    
    }catch(error){
        throw error;
    }
}

const getCarsRentedByCustomer = async (customerId) => {

    try{
    const query = `
        SELECT Cars.CarsID, Cars.Make, Cars.Model, Cars.Year, Rentals.RentalStartDate, Rentals.RentalEndDate 
        FROM Cars
        INNER JOIN Rentals ON Cars.CarsID = Rentals.CarID
        WHERE Rentals.CustomerID = ?;
    `;
    const cars = await db.query(query, [customerId]);
    return cars;

    }catch(error){
        throw error;
    }
};



module.exports = {
    createRental,
    calculateRentalCost,
    getCustomersByCarId,
    getCarsRentedByCustomer,
    
};
