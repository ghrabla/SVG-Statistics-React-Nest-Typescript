"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var items_module_1 = require("./items/items.module");
var mongoose_1 = require("@nestjs/mongoose");
var admins_module_1 = require("./admins/admins.module");
var orders_module_1 = require("./orders/orders.module");
var client_module_1 = require("./clients/client.module");
var cars_module_1 = require("./cars/cars.module");
var keys_1 = require("./config/keys");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [items_module_1.ItemsModule, mongoose_1.MongooseModule.forRoot(keys_1["default"].mongoURI), admins_module_1.AdminsModule, orders_module_1.OrdersModule, client_module_1.ClientModule, cars_module_1.CarsModule],
            controllers: [],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
