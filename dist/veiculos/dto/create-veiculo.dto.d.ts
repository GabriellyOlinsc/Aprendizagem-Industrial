export declare class CreateVeiculoDto {
    vehicleID: number;
    plate: string;
    brand: string;
    fuelSize: number;
    drivers: vehicleDrivers;
}
export declare class vehicleDrivers {
    name: string;
    id: number;
}
