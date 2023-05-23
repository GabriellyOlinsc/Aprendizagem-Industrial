import { VeiculosService } from './veiculos.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
export declare class VeiculosController {
    private readonly veiculosService;
    constructor(veiculosService: VeiculosService);
    create(createVeiculoDto: CreateVeiculoDto): {
        createdAt: Date;
        createdBy: string;
        vehicleID: number;
        plate: string;
        brand: string;
        fuelSize: number;
        drivers: import("./dto/create-veiculo.dto").vehicleDrivers;
    };
    findAll(): import("./entities/veiculo.entity").Veiculo[];
    findOne(id: string): import("./entities/veiculo.entity").Veiculo;
    update(id: string, updateVeiculoDto: UpdateVeiculoDto): {
        updatedAt: string;
        updatedBy: string;
        plate: string;
        vehicleID: number;
        brand: string;
        fuelSize: number;
        drivers: import("./dto/create-veiculo.dto").vehicleDrivers;
    };
    remove(id: string): {
        deletedAt: Date;
        deletedBy: string;
        vehicleID: number;
        plate: string;
        brand: string;
        fuelSize: number;
        drivers: import("./dto/create-veiculo.dto").vehicleDrivers;
    };
}
