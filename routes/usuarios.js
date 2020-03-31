const express = require('express')
//controladores
const {bienvenido, crearUsuario, loguearUsuario} = require('../controllers/usuariosController')
const autenticar = require('../middlewares/auth')


const route = express.Router()


route
    .get('/',autenticar, bienvenido)
    .post('/registrar', crearUsuario)
    .post('/iniciar-sesion', loguearUsuario)


module.exports = route