const express = require('express');
//path sirve para identificar al programa donde esta una ruta
const path = require('path');
//Handle Motor de plantillas
const exphbs = require ('express-handlebars');
//Method-override sirve para que los formularios envien varios tipos de metodos (put delete)
const methodOverride = require('method-override');
//Express-session sirve para crear una session en el sevidor
const session = require('express-session');
//INICIALIZACIONES
const app = express();
require('./database');

//CONFIGURACIONES
app.set('port', process.env.PORT || 9708);
app.set('views', path.join(__dirname, 'views'));
//Handlebars configuracion, motor de plantillas 
    //Se agrego el engine para que funcionara
app.engine('.hbs', exphbs.engine({
    //Archivo principal de plantilla (main)
    defaultLayout:'main' ,
    //Ruta del archivo (//ISSAWEB/SRC/views/layout)
    layoutsDir: path.join(app.get('views'),'layouts'),
    //Partes de html reutilizable 
    partialsDir: path.join(app.get('views'),'partials' ),
    //Identifica que extencion de archivo se usara
    extname: '.hbs'
}));
    //Utilizaciion de la configuracion .hbs
app.set('view engine','.hbs');

//MIDDLEWARES

//Para poder usar los datos obtenidos de la pagina (Recibir datos)
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
//Nos permite autentificar al usuario
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true

}));


//VARIANTES GLOBALES

//RUTAS

app.use(require ('./routes/index'));
app.use(require ('./routes/notes'));
app.use(require ('./routes/users'));

//ARCHIVOS ESTATICOS

app.use(express.static(path.join(__dirname,'imagenes')));

//SERVIDOR ESTA ESCUCHANDO
app.listen(app.get('port'), ()=> {
    console.log('Servidor con el puerto', app.get('port'));

});