"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrdersModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var orders_service_1 = require("./orders.service");
var order_schema_1 = require("./schemas/order.schema");
var orders_controller_1 = require("./orders.controller");
var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = __decorate([
        (0, common_1.Module)({
            imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Order', schema: order_schema_1.OrdersSchemas }])],
            controllers: [orders_controller_1.OrdersController],
            providers: [orders_service_1.OrdersService]
        })
    ], OrdersModule);
    return OrdersModule;
}());
exports.OrdersModule = OrdersModule;
