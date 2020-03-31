const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
//rutas usuarios:
const rutasUsuarios = require('./routes/usuarios')
const rutasLibros = require('./routes/libros')

const {url} = require('./secretos')
mongoose.connect(url, {useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true }, ()=> {
    app.listen(3030, ()=>{
        console.log('app conectada a base de datos y escuchando en el puerto ', 3030);
    })
})

const app = express()

//middlewares
app.use(bodyParser.json())
app.use('/usuarios', rutasUsuarios)
app.use('/libros', rutasLibros)




