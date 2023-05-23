import { Injectable, UseGuards } from '@nestjs/common';
import { CreateVeiculoDto, vehicleDrivers } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { Veiculo } from './entities/veiculo.entity';  //importei a entidade veiculo

//service é o controller pois vai processar os dados entregues pelo VIEW 
 
@Injectable()
export class VeiculosService {
  private veiculos: Veiculo[] = [];  //private makes veiculos inaccessible outside VeiculosService

  create(createVeiculoDto: CreateVeiculoDto) { 
    const automovel ={
      ...createVeiculoDto, 
      createdAt: new Date(),
      createdBy:"Gabrielly"
    }
    this.veiculos.push(automovel);
    return automovel

    // const automovel= {
    //   ...createVeiculoDto,  //spread operator 
    // }
    // this.veiculos.push(automovel);  //adiciona o novo veiculo para dentro do array criado acima 
  
    // const vehicleCreated ={
    //   ...automovel, // replicar as infrormações enviadas na requisição 
    //   createdAt: Date(),
    //   createdBy: "Gabrielly"  //tentar tratar a variavel quando entrar no get 
    // }
    // return vehicleCreated;
  }

  findAll() {
    //achar uma maneira de não enviar as infromações do createdBy e createdAt 
    return this.veiculos;
 
  }

  findOne(placa: string) {
    //tratar aqui 
    const index = this.veiculos.findIndex((automovel) => automovel.plate === placa);  //procura se aquela placa existe e se existir qual o index dela
    return this.veiculos[index]; //pega o veiculo com o index encontrado 
  }

  update(placa: string, updateVeiculoDto: UpdateVeiculoDto) {
    const veiculo = this.findOne(placa)
    const newVeiculo ={
      ...veiculo,
      ...updateVeiculoDto,
    }
    const index = this.veiculos.findIndex((automovel) => automovel.plate === placa);
    this.veiculos[index] = newVeiculo;

    const updateVehicle ={
      ...newVeiculo,
      updatedAt:Date(),
      updatedBy: "Gabrielly"
    }
    return updateVehicle;
  }

  remove(placa: string) {
    const index = this.veiculos.findIndex((automovel) => automovel.plate === placa);
    const veiculoExcluido = {
      ...this.veiculos[index], 
      deletedAt: new Date(),
      deletedBy:"Gabrielly"
    }
    this.veiculos.splice(index,1);

    return veiculoExcluido;

  }
}


