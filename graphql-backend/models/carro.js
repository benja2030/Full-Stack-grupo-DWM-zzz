const mongoose = require('mongoose');

// Declaramos la coleccion para el carro de compras
const carroSchema = new mongoose.Schema({
    // Arreglo con id de los productos
    idProductos: [{type: mongoose.Schema.ObjectId, ref:'Menu'}],
    // Total de los precios de los productos
    total: Number,
    // Guarda el ID del usuario del carro de compras
    usuario: {type: mongoose.Schema.ObjectId, ref:'Usuario'}
   
});

// Lo convertimos en un modulo y lo exportamos para usarlo en el proyecto
module.exports = mongoose.model('Carro', carroSchema);
