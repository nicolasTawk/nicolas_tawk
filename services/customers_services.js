const {query} = require("../database/db")

/**
 * 
 * @param {Customer} customer 
 * @returns Customers
 */
const CreateCustomer = async(customer) =>{

    try{

        const [CustomerID, FirstName, LastName, Email, Phone, Address] = customer;
        const result = await query("INSERT INTO Customers (CustomerID, FirstName, LastName, Email, Phone, Address) VALUES (?,?,?,?,?,?)", [CustomerID, FirstName, LastName, Email, Phone, Address]);
        return result;

    }catch(error){
        throw error;
    }

}

const UpdateCustomerProfile = async(CustomerID, customer)=>{

    try{
     
        const [FirstName, LastName, Email, Phone, Address] = customer;
        const result = await query("UPDATE Customers SET FirstName = ?, LastName = ?, Email = ?, Phone = ?, Adress = ? WHERE CustomerID = ?", [FirstName, LastName, Email, Phone, Address , CustomerID]);
        return result;

    }catch(error){
        throw error;
    }
}

// Retrieve all customers
const GetAllCustomers = async () => {
    try {
        const result = await query("SELECT * FROM Customers");
        return result;
    } catch (error) {
        throw error;
    }
}

// Retrieve a single customer by ID
const GetCustomerById = async (CustomerID) => {
    try {
        const result = await query("SELECT * FROM Customers WHERE CustomerID = ?", [CustomerID]);
        return result;
    } catch (error) {
        throw error;
    }
}

// Delete a customer by ID
const DeleteCustomer = async (CustomerID) => {
    try {
        const result = await query("DELETE FROM Customers WHERE CustomerID = ?", [CustomerID]);
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = { CreateCustomer, UpdateCustomerProfile, GetAllCustomers, GetCustomerById, DeleteCustomer };

