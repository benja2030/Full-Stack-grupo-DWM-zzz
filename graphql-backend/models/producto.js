const mongoose = require('mongoose');

// Declaramos la coleccion para los productos
const productoSchema = new mongoose.Schema({
    llave: Number,
    // Nombre del producto
    nombre: String,
    // Precio del producto
    precio: Number,
    imagen: String,
    descripcion: String,
    // ID de la categoria del producto
    //idCategoria: {type: mongoose.Schema.ObjectId, ref: 'Categoria'},
    // Nombre de la categoria del producto
    //nombreCategoria: {type: String, ref: 'Categoria'}
});

module.exports = mongoose.model('Producto', productoSchema);