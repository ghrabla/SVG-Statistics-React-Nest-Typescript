"use strict";
exports.__esModule = true;
exports.ClientShcema = void 0;
var mongoose = require("mongoose");
exports.ClientShcema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
