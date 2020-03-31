const mongoose = require('mongoose')

const Schema = mongoose.Schema

const libroSchema = new Schema({
    lector: {type: Schema.Types.ObjectId, ref:'Usuario'},
    nombre: String,
    autor: String
})


module.exports = mongoose.model('Libro', libroSchema)