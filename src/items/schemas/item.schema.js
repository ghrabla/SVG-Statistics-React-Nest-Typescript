"use strict";
exports.__esModule = true;
exports.ItemSchema = void 0;
var mongoose = require("mongoose");
exports.ItemSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    description: String
});
