const mongoose = require('mongoose');

// Declaramos la coleccion de pagos
const pagoSchema = new mongoose.Schema({
    // Fecha en que se produjo el pago
    fecha: String,
    // Total que se esta pagando
    total: {type: Number, ref: 'Carro'},
    // ID del usuario que esta pagando
    idUsuario: {type: mongoose.Schema.ObjectId, ref:'Carro'},
    // Tipo de pago
    tipoPago: String,
    // Estado de pago, 0 no pagado y 1 pagado
    estado: Number
});

module.exports = mongoose.model('Pago', pagoSchema);