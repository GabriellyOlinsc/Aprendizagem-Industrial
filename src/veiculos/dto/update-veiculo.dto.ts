import { PartialType } from '@nestjs/mapped-types';
import { CreateVeiculoDto } from './create-veiculo.dto';

export class UpdateVeiculoDto extends PartialType(CreateVeiculoDto) { //partialType permite que as mudanças sejam parciais 
    plate:string; // a placa não pode ser alterada, é o que vai fazer a gente encontrar determinado veiculo 
}
