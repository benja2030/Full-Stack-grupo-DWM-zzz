const mongoose = require('mongoose');

// Declaramos la coleccion para los usuarios
const usuarioSchema = new mongoose.Schema({
    // Nombre del usuario
    nombre: String,
    // Direccion del usuario
    direccion: String,
    // Email del usuario
    email: String,
    // Verificacion del email del usuario, 0 si no esta verificado y 1 si esta verificado
    verEmail: Number,
    // Contraseña del usuario
    pass: String,
    // Telefono del usuario
    telefono: String,
    // Sexo del usuario
    sexo: String,
    // ID del perfil del usuario
    idPerfil: {type: mongoose.Schema.ObjectId, ref: 'Perfil'},
    // Fecha de creacion del usuario
    fechaCreacion: String
});

module.exports = mongoose.model('Usuario', usuarioSchema);