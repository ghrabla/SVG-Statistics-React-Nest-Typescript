import * as mongoose from 'mongoose';

export const AdminShcema = new mongoose.Schema({
    fullname: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true} 

}) 