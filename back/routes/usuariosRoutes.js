const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/', usuariosController.createUsuario);
router.get('/', usuariosController.findUsuarios);

module.exports = router;