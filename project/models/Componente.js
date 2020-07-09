var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Componente_detalleSchema = new Schema({
    //Procesador
    modelo:{
        type: String,
        //required: true,
        min: 1
    },
    nucleos:{
        type:Number,
        //required:true,
        min:1
    },
    frecuencia:{
        type:Number,
        //required:true,
        min:0
    },
    capacidad:{
        type:Number,
        //required:true,
        min:1
    },
    soporte:{
        type: String,
        //required: true,
        min: 1
    },
    formato:{
        type: String,
        //required: true,
        min: 1
    },
    memoria:{
        type: String,
        //required: true,
        min: 1
    },
    tipo:{
        type: String,
        //required: true,
        min: 1
    },
    interfaz:{
        type: String,
        //required: true,
        min: 1
    },
    velocidad:{
        type:Number,
        //required:true,
        min:1
    },
    certificacion:{
        type: String,
        //required: true,
        min: 1
    },voltaje:{
        type:Number,
        //required:true,
        min:1
    }
});

var ComponenteSchema = new Schema({
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
    detalle:Componente_detalleSchema
});

module.exports = mongoose.model('Componente', ComponenteSchema);