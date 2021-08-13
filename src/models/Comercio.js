import { SchemaTypes, model, Schema } from "mongoose";

const comercioSchema = new Schema({
    nombreComercio:{
        type: String,
        unique:true,
        required:true
    },
    imagenComercio:{
        type: String,
        required:true
    },
    horario: {
        type:String
    },
    ubicacion:{
        type:Array
    }

});

export default model('Comercio', comercioSchema);