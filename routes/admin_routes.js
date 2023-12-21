const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin_controller');

router.get('/login', (req, res) => res.render('adminLogin'));
router.post('/login', adminController.adminLogin);
router.get('/dashboard', adminController.adminDashboard);

module.exports = router;
