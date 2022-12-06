const mongoose = require('mongoose');

// Declaramos la coleccion para la categoria de los productos
const categoriaSchema = new mongoose.Schema({
    // El nombre de la categoria
    nombre: String,
    // Arreglo con los id de los productos en la categoria
    idProductos: [{type: mongoose.Schema.ObjectId, ref:'Producto'}]
});

// Convertimos en modulo y lo exportamos
module.exports = mongoose.model('Categoria', categoriaSchema);