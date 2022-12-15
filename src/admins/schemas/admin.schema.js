"use strict";
exports.__esModule = true;
exports.AdminShcema = void 0;
var mongoose = require("mongoose");
exports.AdminShcema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
