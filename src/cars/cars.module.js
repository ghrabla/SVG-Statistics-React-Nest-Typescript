"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CarsModule = void 0;
var common_1 = require("@nestjs/common");
var cars_controller_1 = require("./cars.controller");
var cars_service_1 = require("./cars.service");
var mongoose_1 = require("@nestjs/mongoose");
var cars_schemas_1 = require("./schemas/cars.schemas");
var CarsModule = /** @class */ (function () {
    function CarsModule() {
    }
    CarsModule = __decorate([
        (0, common_1.Module)({
            imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Cars', schema: cars_schemas_1.CarsSchema }])],
            controllers: [cars_controller_1.CarsController],
            providers: [cars_service_1.CarsService]
        })
    ], CarsModule);
    return CarsModule;
}());
exports.CarsModule = CarsModule;
