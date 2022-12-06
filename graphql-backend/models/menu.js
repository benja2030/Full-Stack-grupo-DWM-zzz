const mongoose = require('mongoose');

// Declaramos coleccion para el menu de los productos
const menuSchema = new mongoose.Schema({
    // ID del producto en el menu
    idProducto: {type: mongoose.Schema.ObjectId, ref:'Producto'},
    // Nombre del producto en el menu
    nombreProducto: {type: String, ref:'Producto'},
    // Precio del producto
    precio: {type: Number, ref:'Producto'},
    // Descripcion del producto
    descripcion: String
});

module.exports = mongoose.model('Menu', menuSchema);