"use strict";
exports.__esModule = true;
exports.CarsSchema = void 0;
var mongoose = require("mongoose");
exports.CarsSchema = new mongoose.Schema({
    name: String,
    img: String,
    description: String,
    color: String,
    price: Number,
    qty: Number
});
