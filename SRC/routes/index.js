const express = require('express');
const router = express.Router();

// metodo get para: '/' pagina principal, (req res) request respond datos de la pagina
router.get('/', (req, res) => {

    res.render('index.hbs');

});

router.get('/about', (req, res) => {

    res.render('about.hbs');

});





module.exports = router;