const express = require('express');
const router = express.Router();

router.get('/users/inicio', (req, res)=>{

    res.render('users/inicio.hbs');

});

router.get('/users/registro', (req, res)=>{

    res.render('users/registro.hbs');

});

module.exports = router;