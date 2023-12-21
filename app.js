const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require("ejs");
require('dotenv').config();

// Importing routes
const carRoutes = require('./routes/cars_routes');
const customerRoutes = require('./routes/customer_route');
const pricingRoutes = require('./routes/pricing_routes');  // Added import for pricing routes
const rentalRoutes = require('./routes/rental_routes');    // Added import for rental routes
const homeRoutes = require('./routes/homePage');
const adminRoutes = require('./routes/admin_routes');
// Initializing the Express application
const app = express();

// Middleware for parsing JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// Static Files
app.use(express.static('public'));

// Using the imported routes
app.use('/admin', adminRoutes);
app.use('/', homeRoutes);
app.use('/cars', carRoutes);
app.use('/customers', customerRoutes);
app.use('/pricing', pricingRoutes);  // Added route for pricing
app.use('/rentals', rentalRoutes); 
app.use('/', carRoutes);  // Added route for rentals

// Catch-all route for handling 404 errors
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Starting the server
const PORT = process.env.PORT || 3000;  // Default port to 3000 if not set in environment
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
