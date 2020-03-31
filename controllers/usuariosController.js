const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const bienvenido = (req, res) => {
    console.log(req.auth);
    res.json('hola')
}

const crearUsuario = async (req, res)=>{
    const {email, password} = req.body
    const nuevoPassword = await bcrypt.hash(password, 10)
    const nuevoUsuario = await Usuario.create({email, password: nuevoPassword})
    res.json(nuevoUsuario)
}

const loguearUsuario = async (req, res)=> {
    const {email, password} = req.body
    const resultado = await Usuario.findOne({email})
    if(!resultado){
        res.json({mensaje: 'Usuario inexistente'})
    }
    const passwordValido = await bcrypt.compare(password, resultado.password)
    if(passwordValido){
        const token = jwt.sign({resultado}, 'secreto', { expiresIn: '24h' });
        res.json({mensaje: 'Bienvenido ahi te va tu token', token})
    }else{
        res.json({mensaje:'Password invalido'})
    }
}


module.exports = {
    bienvenido,
    crearUsuario,
    loguearUsuario
}