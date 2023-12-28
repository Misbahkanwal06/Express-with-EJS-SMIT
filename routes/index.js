const express = require('express');  // import express
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index', {
        title: "myHomePage"
    });
});

router.get('/about', (req, res) => {
    res.render('about', {
        title: "myAboutPage"
    });
});

router.post('/api/products', (req, res) => {
    res.json(
        [{
            id: "123",
            name: "misbah",
            roll: "31",
        },
        {
            id: "456",
            name: "kanwal",
            roll: "31", 
        }
        ])
});

module.exports = router;