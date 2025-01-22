import { AlunoRequestDto } from '../dto/aluno-request.dto';
import { AlunoResponseDto } from '../dto/aluno-response.dto';
import { Aluno } from '../entities/aluno.entity';
import { AlunoMapper } from './aluno.mapper';

export class AlunoMapperImpl implements AlunoMapper {
  toAlunoResponse(aluno: Aluno): AlunoResponseDto {
    const alunoDto = new AlunoResponseDto();
    alunoDto.id = aluno.id;
    alunoDto.nome = aluno.nome;
    alunoDto.email = aluno.email;
    alunoDto.dataAula = aluno.data_aula;
    alunoDto.createdAt = aluno.createdAt;
    alunoDto.updatedAt = aluno.updatedAt;
    return alunoDto;
  }
  toAlunoEntity(alunoDto: AlunoRequestDto): Aluno {
    const aluno = new Aluno();
    aluno.nome = alunoDto.nome;
    aluno.email = alunoDto.email;
    aluno.data_aula = alunoDto.dataAula;
    return aluno;
  }
}
