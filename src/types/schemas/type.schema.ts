import * as mongoose from 'mongoose';

export const TypeSchema = new mongoose.Schema({
    id_car: [{type: mongoose.Schema.Types.ObjectId,required: true,ref:"Cars"}],
    id_detail: [{type: mongoose.Schema.Types.ObjectId,required: true,ref:"Details"}]
})