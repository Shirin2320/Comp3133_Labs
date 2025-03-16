var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Handle GET request to /users
router.get('/', function(req, res) {
    res.send('Users route working!');
});

// Handle POST request to /users (which is already working)
router.post('/', function(req, res) {
    console.log(req.body); // Logs the request body in the terminal
    res.send('POST received!');
});

module.exports = router;
