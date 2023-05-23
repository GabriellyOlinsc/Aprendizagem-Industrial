import { vehicleDrivers } from "../dto/create-veiculo.dto";
export declare class Veiculo {
    vehicleID: number;
    plate: string;
    brand: string;
    fuelSize: number;
    drivers: vehicleDrivers;
}
