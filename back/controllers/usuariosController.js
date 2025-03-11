const User = require('../models/usuarios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findUsuarios = async (req, res) => {
    try {
        const usuarios = await User.find();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error al obtener los usuarios'});
    }
}


const createUsuario = async (req, res) => {
    try {
        const {nombre, apellido, email, password, rol} = req.body;

        const hasedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({nombre, apellido, email, password: hasedPassword, rol});
        await newUser.save();

        res.status(201).json({message: 'Usuario creado con éxito'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error al crear el usuario'});
    }
}


module.exports = {
    createUsuario,
    findUsuarios
};