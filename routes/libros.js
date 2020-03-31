const express = require('express')
//controladores

const autenticar = require('../middlewares/auth')

const {nuevoLibro, verLibros, verLibro, modificarLibro, eliminarLibro} = require('../controllers/librosController')
const route = express.Router()


route
    .get('/', autenticar, verLibros)
    .get('/:idLibro', autenticar, verLibro)
    .put('/editar/:idLibro', autenticar, modificarLibro)
    .post('/',autenticar,  nuevoLibro)
    .delete('/eliminar/:idLibro', autenticar, eliminarLibro)


module.exports = route