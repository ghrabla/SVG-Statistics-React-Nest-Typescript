"use strict";
exports.__esModule = true;
exports.OrdersSchemas = void 0;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
exports.OrdersSchemas = new mongoose.Schema({
    adresse: { type: String, required: true },
    city: { type: String, required: true },
    phone: { type: String, required: true },
    postal: { type: String, required: true },
    id_client: [{ type: Schema.Types.ObjectId, required: true, ref: "Client" }],
    id_car: [{ type: Schema.Types.ObjectId, required: true, ref: "Cars" }]
});
