import * as mongoose from 'mongoose';

export const CarsSchema = new mongoose.Schema({
    name: String,
    img: String,
    description: String,
    color: String,
    price: Number,
    qty: Number,
});