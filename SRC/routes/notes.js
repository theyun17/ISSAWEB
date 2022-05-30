const express = require('express');
const router = express.Router();

// metodo get para: '/' pagina principal, (req res) request respond datos de la pagina
router.get('/notes', (req, res) =>{

    res.send('Notes from data base');

});

module.exports = router;

