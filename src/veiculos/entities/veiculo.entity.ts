import { vehicleDrivers } from "../dto/create-veiculo.dto";

export class Veiculo { //definindo a entidade veiculo e quais atributos ela terá
  vehicleID : number;
  plate: string;
  brand : string;
  fuelSize: number;
  drivers: vehicleDrivers;
}