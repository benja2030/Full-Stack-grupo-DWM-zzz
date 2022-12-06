const mongoose = require('mongoose');

// Declaramos la coleccion para las ordenes de venta
const ordenSchema = new mongoose.Schema({
    // Estado del pago, 0 si no se a pagado, 1 si se pago
    estadoPago: {type: Number, ref:'Pago'},
    // Estado de la orden. En cola, Cocinando, Lista, Cancelada, etc.
    estadoOrden: String,
    // Tipo de entrega. Delivery o en local.
    tipoEntrega: String,
    // Fecha de creacion de la orden
    fecha: String,
    // Arreglo con los ID de los productos que se vendieron
    idProductos: [{type: mongoose.Schema.ObjectId, ref:'Carro'}],
    // El total del precio de los productos
    total: {type: Number, ref: 'Carro'},
    // ID del usuario que ordeno
    idUsuario: {type: mongoose.Schema.ObjectId, ref:'Carro'},
    // Nombre del usuario que ordeno
    nombreUsuario: {type: String, ref:'Usuario'},
    // Email del usuario que ordeno
    emailUsuario: {type: String, ref:'Usuario'},
    // Direccion del usuario que ordeno
    direccion:{type: String, ref: 'Usuario'}
});

module.exports = mongoose.model('Orden', ordenSchema);