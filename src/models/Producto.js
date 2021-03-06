import { Schema, model, SchemaTypes } from "mongoose";

const productoSchema = new Schema({
    nombreProducto: {
        type:String,
        required:true
    },
    imagenProducto: {
        type:String
    },
    descripcion: {
        type:String
    },
    precio: {
        type:String
    },
    categoriaProducto: {
        ref:"CategoriaProducto",
        type:Schema.Types.ObjectId
    }

});

export default model('Producto', productoSchema)