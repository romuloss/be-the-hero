const express = require('express') ;

const ongController = require('./controller/ongController') ;
const incidentsController = require('./controller/incidentsController') ;
const profileController = require('./controller/profileController') ;
const sessionController = require('./controller/sessionController');

const routes = express.Router();

routes.post('/sessions', sessionController.create); 

routes.get('/ongs' , ongController.index);
routes.post('/ongs', ongController.create); 

routes.get('/profile', profileController.index); 

routes.get('/incidents' , incidentsController.index);
routes.post('/incidents', incidentsController.create); 
routes.delete('/incidents/:id', incidentsController.delete); 


module.exports = routes; 