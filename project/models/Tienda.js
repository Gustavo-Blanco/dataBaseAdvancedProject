var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TiendaSchema = Schema({
    nombre: {
        type: String,
        required:true,
        max: 30
    },
    descripcion: {
        type: String,
        required:true,
        max: 250
    },
    adm_tienda: {
        type: String,
        required:true,
        max: 30
    },
    direccion: {
        type: String,
        required:true,
        max: 50
    },
    numero: {
        type: String,
        required:true,
        max: 60
    },
    email:{
        type: String,
        required:true,
        max: 30
    }
});

module.exports = mongoose.model('Tienda', TiendaSchema);