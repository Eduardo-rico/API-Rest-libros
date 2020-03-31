const mongoose = require('mongoose')

const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    email: String,
    password: String
})


module.exports = mongoose.model('Usuario', usuarioSchema)