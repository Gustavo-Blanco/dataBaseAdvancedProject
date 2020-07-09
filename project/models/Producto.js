var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Producto_detalleSchema = new Schema({
    //Procesador
    procesador:{
        type: String,
        //required: true,
        min: 1
    },
    ram:{
        type:Number,
        //required:true,
        min:1
    },
    placa:{
        type:String,
        //required:true,
        min:1
    },
    almacenamiento:{
        type:Number,
        //required:true,
        min:1
    },
    bateria:{
        type: Number,
        //required: true,
        min: 1
    },
    modelo:{
        type: String,
        //required: true,
        min: 1
    },
    fuente:{
        type: String,
        //required: true,
        min: 1
    },
    video:{
        type: String,
        //required: true,
        min: 1
    }
    
});

var ProductoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        min: 70
    },
    marca:{
        type: String,
        required: true,
        min: 70
    },
    precio:{
        type: Number,
        required: true,
        min:0 
    },
    stock:{
        type: Number,
        required: true,
        min:0 
    },
    categoria:{
        type: String,
        required: true,
        min: 15
    },
    detalle:Producto_detalleSchema
});

module.exports = mongoose.model('Producto', ProductoSchema);