const express = require('express');
const path = require('path');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const fetch = require('node-fetch');

const app = express();
const RECAPTCHA_SECRET_KEY = '6LcFPs8qAAAAAFWcQrQc54ugpCG7uKAvoqb-ai9e'; // Your reCAPTCHA secret key
const storedHashedPassword = '$2a$10$rXQMZQJLDnYMiyNJREdHcuARJEojUY6LD65mXwwA.BkaL1uG5zWGa';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

// Serve static files (like HTML, CSS, JS) from /public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle login request
app.post('/api/login', async (req, res) => {
    const { password, recaptcha } = req.body;

    // Verify reCAPTCHA
    const recaptchaVerificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptcha}`;
    const recaptchaVerificationResponse = await fetch(recaptchaVerificationUrl, { method: 'POST' });
    const recaptchaResult = await recaptchaVerificationResponse.json();

    if (!recaptchaResult.success) {
        return res.status(400).json({ success: false, message: 'reCAPTCHA verification failed' });
    }

    // Check the entered password against the stored hash
    const isMatch = await bcrypt.compare(password, storedHashedPassword);

    if (isMatch) {
        req.session.loggedIn = true;
        return res.json({ success: true });
    } else {
        return res.status(400).json({ success: false, message: 'Invalid password' });
    }
});

// Protected route for secret page
app.get('/api/password', (req, res) => {
    if (req.session.loggedIn) {
        res.sendFile(path.join(__dirname, 'secret', 'password.html'));  // Serve secret page
    } else {
        res.redirect('/login'); // Redirect to login page if not logged in
    }
});

module.exports = app;  // Export the app for Vercel to handle
