"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculosService = void 0;
const common_1 = require("@nestjs/common");
let VeiculosService = class VeiculosService {
    constructor() {
        this.veiculos = [];
    }
    create(createVeiculoDto) {
        const automovel = Object.assign(Object.assign({}, createVeiculoDto), { createdAt: new Date(), createdBy: "Gabrielly" });
        this.veiculos.push(automovel);
        return automovel;
    }
    findAll() {
        return this.veiculos;
    }
    findOne(placa) {
        const index = this.veiculos.findIndex((automovel) => automovel.plate === placa);
        return this.veiculos[index];
    }
    update(placa, updateVeiculoDto) {
        const veiculo = this.findOne(placa);
        const newVeiculo = Object.assign(Object.assign({}, veiculo), updateVeiculoDto);
        const index = this.veiculos.findIndex((automovel) => automovel.plate === placa);
        this.veiculos[index] = newVeiculo;
        const updateVehicle = Object.assign(Object.assign({}, newVeiculo), { updatedAt: Date(), updatedBy: "Gabrielly" });
        return updateVehicle;
    }
    remove(placa) {
        const index = this.veiculos.findIndex((automovel) => automovel.plate === placa);
        const veiculoExcluido = Object.assign(Object.assign({}, this.veiculos[index]), { deletedAt: new Date(), deletedBy: "Gabrielly" });
        this.veiculos.splice(index, 1);
        return veiculoExcluido;
    }
};
VeiculosService = __decorate([
    (0, common_1.Injectable)()
], VeiculosService);
exports.VeiculosService = VeiculosService;
//# sourceMappingURL=veiculos.service.js.map