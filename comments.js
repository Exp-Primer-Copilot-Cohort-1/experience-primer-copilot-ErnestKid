// Create web server

// Import module
const express = require('express');
const bodyParser = require('body-parser');

// Create web server
const app = express();

// Use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set port
const port = process.env.PORT || 8080;

// Set route
const router = express.Router();

// Middleware
router.use((req, res, next) => {
    console.log('Something is happening');
    next();
});

// Test router
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to my API' });
});

// Set route
app.use('/api', router);

// Start server
app.listen(port);
console.log('Magic happens on port ' + port);