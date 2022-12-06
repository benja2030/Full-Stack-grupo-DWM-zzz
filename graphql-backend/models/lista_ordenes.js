const mongoose = require('mongoose');

// Declaramos coleccion para la lista de todas las ordenes
const lista_ordenesSchema = new mongoose.Schema({
    // Estado de la orden
    estadoOrden: {type: String, ref: 'Orden'},
    // Fecha de creacion de la orden
    fechaOrden: {type: String, ref: 'Orden'},
    // ID de la orden
    idOrden: {type: mongoose.Schema.ObjectId, ref: 'Orden'}
});

// Convertimos en modulo y lo exportamos
module.exports = mongoose.model('Lista_Ordenes', lista_ordenesSchema);