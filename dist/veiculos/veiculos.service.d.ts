import { CreateVeiculoDto, vehicleDrivers } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { Veiculo } from './entities/veiculo.entity';
export declare class VeiculosService {
    private veiculos;
    create(createVeiculoDto: CreateVeiculoDto): {
        createdAt: Date;
        createdBy: string;
        vehicleID: number;
        plate: string;
        brand: string;
        fuelSize: number;
        drivers: vehicleDrivers;
    };
    findAll(): Veiculo[];
    findOne(placa: string): Veiculo;
    update(placa: string, updateVeiculoDto: UpdateVeiculoDto): {
        updatedAt: string;
        updatedBy: string;
        plate: string;
        vehicleID: number;
        brand: string;
        fuelSize: number;
        drivers: vehicleDrivers;
    };
    remove(placa: string): {
        deletedAt: Date;
        deletedBy: string;
        vehicleID: number;
        plate: string;
        brand: string;
        fuelSize: number;
        drivers: vehicleDrivers;
    };
}
