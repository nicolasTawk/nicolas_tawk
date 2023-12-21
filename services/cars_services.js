const {query} = require("../database/db");

const AddNewCar = async (Model, Year, Make)=>{

    try{
        const result = await query("INSERT INTO cars (Make, Model, Year) VALUES (?,?,?)",[Make, Model, Year]);
        return result;

    }catch(error){
        throw error;
    }
}

const UpdateCarDetails = async (CarID, cars) =>{

    try{
        const [Make, Model, Year, AdditionalDetails] = cars;
        const result = await query("UPDATE cars SET Make = ?, Model = ?, Year = ?, AdditionalDetails = ? WHERE CarID = ?" , [Make, Model, Year, AdditionalDetails, CarID]);
        return result;

    }catch(error){
        throw error;
    }
}

// Retrieve all cars
const GetAllCars = async () => {
    try {
        const result = await query("SELECT * FROM cars");
        return result;
    } catch (error) {
        throw error;
    }
}

// Retrieve a single car by ID
const GetCarById = async (CarID) => {
    try {
        const result = await query("SELECT * FROM cars WHERE CarsID = ?", [CarID]);
        return result;
    } catch (error) {
        throw error;
    }
}

// Delete a car by ID
const DeleteCar = async (CarID) => {
    try {
        const result = await query("DELETE FROM cars WHERE CarID = ?", [CarID]);
        return result;
    } catch (error) {
        throw error;
    }
}
// cars_services.js

const searchCarsByName = async (name) => {
    try {
    
        const result = await query("SELECT * FROM cars WHERE Model LIKE ?", [`%${name}%`]);
        return result;
    } catch (error) {
        throw error;
    }
}



module.exports = { AddNewCar, UpdateCarDetails, GetAllCars, GetCarById, DeleteCar,searchCarsByName };
