const bcrypt = require('bcryptjs');

const adminLogin = (req, res) => {
    const { username, password } = req.body;
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH || '$2y$10$wVTRwojvvWsVowzEbtQL2ehQFT5SKtPvUliNYWmnTe.63MxpMIO1.';

    if (username === adminUsername && bcrypt.compareSync(password, adminPasswordHash)) {
        // Redirect to the admin dashboard
        res.redirect('/admin/dashboard');
    } else {
        // Handle login failure
        res.status(401).send("Invalid credentials");
    }
};

const adminDashboard = (req, res) => {
    res.render('adminDashboard');
};

module.exports = { adminLogin, adminDashboard };
