"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.OrdersController = void 0;
var common_1 = require("@nestjs/common");
var OrdersController = /** @class */ (function () {
    function OrdersController(serviceOrder) {
        this.serviceOrder = serviceOrder;
    }
    OrdersController.prototype.findall = function () {
        return this.serviceOrder.findall();
    };
    OrdersController.prototype.findone = function (id) {
        return this.serviceOrder.findone(id);
    };
    OrdersController.prototype.create = function (data) {
        return this.serviceOrder.create(data);
    };
    OrdersController.prototype.remove = function (_id) {
        return this.serviceOrder.remove(_id);
    };
    OrdersController.prototype.update = function (_id, data) {
        return this.serviceOrder.update(_id, data);
    };
    __decorate([
        (0, common_1.Get)()
    ], OrdersController.prototype, "findall");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], OrdersController.prototype, "findone");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], OrdersController.prototype, "create");
    __decorate([
        (0, common_1.Delete)(':_id'),
        __param(0, (0, common_1.Param)())
    ], OrdersController.prototype, "remove");
    __decorate([
        (0, common_1.Put)(':_id'),
        __param(0, (0, common_1.Param)()),
        __param(1, (0, common_1.Body)())
    ], OrdersController.prototype, "update");
    OrdersController = __decorate([
        (0, common_1.Controller)('orders')
    ], OrdersController);
    return OrdersController;
}());
exports.OrdersController = OrdersController;
