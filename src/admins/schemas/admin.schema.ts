import * as mongoose from 'mongoose';

export const AdminShcema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String

})