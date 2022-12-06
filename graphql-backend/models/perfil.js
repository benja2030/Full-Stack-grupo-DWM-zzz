const mongoose = require('mongoose');

// Declaramos la coleccion para los perfiles de los usuarios
const perfilSchema = new mongoose.Schema({
    // Nombre del perfil
    nombre: String,
    // ID de los usuarios que estan en el perfil
    idUsuarios: [
        {type: mongoose.Schema.ObjectId, ref:'Usuario'}
    ],
    // Descripcion del perfil
    descripcion: String
});

module.exports = mongoose.model('Perfil', perfilSchema);