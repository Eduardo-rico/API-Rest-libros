const Libro = require('../models/Libro')
const Usuario = require('../models/Usuario')

const verLibros = (req, res) => {
    const lector = req.lector
    Libro.find({lector}, (err, libros)=>{
        Usuario.populate(libros, {path: 'lector', select: 'email'}, (err, libros)=>{
            res.json(libros)
        })
    })

}

const verLibro = (req, res) => {
    const lector = req.lector
    const {idLibro} = req.params
    Libro.findOne({lector, _id:idLibro}, (err, libros)=>{
        Usuario.populate(libros, {path: 'lector', select: 'email'}, (err, libros)=>{
            res.json(libros)
        })
    })
}

const nuevoLibro = async (req, res) => {
    const lector = req.lector //lo sacamos del auth.js y solo tiene el id del usuario
    const {nombre, autor} = req.body
    const nuevoLibro = await Libro.create({lector, nombre, autor, })
    res.json(nuevoLibro)
    
}

const modificarLibro = async (req, res) => {
    const lector = req.lector
    const {nombre, autor} = req.body
    const {idLibro} = req.params
    const libroModificado = await Libro.findByIdAndUpdate({lector, _id: idLibro}, {nombre, autor}, {new:true})
    res.json(libroModificado)
}

const eliminarLibro = async (req, res) => {
    const lector = req.lector
    const {idLibro} = req.params
    await Libro.findByIdAndDelete({lector, _id: idLibro})
    res.json({mensaje: 'Libro eliminado'})

}


module.exports = {
    verLibros,
    verLibro,
    nuevoLibro,
    modificarLibro,
    eliminarLibro
}