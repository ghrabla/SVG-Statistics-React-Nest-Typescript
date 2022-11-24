import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const OrdersSchemas = new mongoose.Schema({
       adresse: {type:String,required: true},
       city: {type:String,required: true},
       phone: {type:String,required: true},
       postal: {type:String,required: true},
       id_client:[{type:Schema.Types.ObjectId,required: true,ref:"clients"}],
       id_car:[{type:Schema.Types.ObjectId,required: true,ref:"cars"}]
})