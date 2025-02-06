// /api/secret.js

module.exports = (req, res) => {
    // Check if the session has a `loggedIn` flag (indicating the user is authenticated)
    if (req.session && req.session.loggedIn) {
        // If logged in, display a protected page
        res.send('<h1>Welcome to the secret page!</h1>');
    } else {
        // If not logged in, respond with an error message or redirect to login page
        res.status(401).json({ success: false, message: 'Not authorized. Please login first.' });
    }
};
