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
exports.ItemsController = void 0;
var common_1 = require("@nestjs/common");
var ItemsController = /** @class */ (function () {
    function ItemsController(itemsService) {
        this.itemsService = itemsService;
    }
    ItemsController.prototype.findAll = function () {
        return this.itemsService.findAll();
    };
    ItemsController.prototype.findOne = function (id) {
        return this.itemsService.findOne(id);
    };
    ItemsController.prototype.create = function (createItemDto) {
        return this.itemsService.create(createItemDto);
    };
    ItemsController.prototype["delete"] = function (id) {
        return this.itemsService["delete"](id);
    };
    ItemsController.prototype.update = function (updateItemDto, id) {
        return this.itemsService.update(id, updateItemDto);
    };
    __decorate([
        (0, common_1.Get)()
    ], ItemsController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ItemsController.prototype, "findOne");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], ItemsController.prototype, "create");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ItemsController.prototype, "delete");
    __decorate([
        (0, common_1.Put)(':id'),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, common_1.Param)('id'))
    ], ItemsController.prototype, "update");
    ItemsController = __decorate([
        (0, common_1.Controller)('items')
    ], ItemsController);
    return ItemsController;
}());
exports.ItemsController = ItemsController;
