const mongoose = require('mongoose');

// Declaramos coleccion para la lista de todos los usuarios
const lista_usuariosSchema = new mongoose.Schema({
    // ID del usuario
    idUsuario: {type: mongoose.Schema.ObjectId, ref: 'Usuario'},
    // Email del usuario
    emailUsuario: {type: String, ref: 'Usuario'},
    // Fecha de creacion del usuario
    fechaCreacion: {type: String, ref: 'Usuario'},
    // Nombre del perfil del usuario
    perfilUsuario: {type: String, ref: 'Perfil'}
});

module.exports = mongoose.model('Lista_Usuarios', lista_usuariosSchema);