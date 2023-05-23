export class CreateVeiculoDto {
    vehicleID : number;
    plate: string;
    brand : string;
    fuelSize: number;
    drivers: vehicleDrivers;
}

export class vehicleDrivers { //criar um novo tipo de dado para utilizar no dto; 
    name:string;
    id:number;
}
