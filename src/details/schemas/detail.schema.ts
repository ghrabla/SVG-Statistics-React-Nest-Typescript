import * as mongoose from 'mongoose';

export const DetailSchema = new mongoose.Schema({
    key: String,
    value: String,
})