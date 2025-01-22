import { Expose } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Max,
  Min,
  Validate,
} from 'class-validator';
import { isEmailExists } from 'src/validators/validator-email';
import { Match } from 'src/validators/validator-password';

export class ProfessorUpdateDto {
  id: number;

  @IsString({ message: 'Nome deve ser string' })
  @Length(3, 100, {
    message: 'Nome deve ter no mínimo 3 caracteres e no máximo 100 caracteres',
  })
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  nome: string;

  @IsEmail({}, { message: 'Email inválido' })
  @IsNotEmpty({ message: 'Email não pode ser vazio' })
  email: string;

  @Min(18)
  @Max(100)
  @IsNotEmpty({ message: 'Idade não pode ser vazio' })
  idade: number;

  @IsNotEmpty({ message: 'Descrição não pode ser vazio' })
  @Length(10, 500, {
    message: 'Descrição deve ter no mínimo 10 caracteres e no máximo 500',
  })
  descricao: string;

  @Expose({ name: 'valor_hora' })
  @IsNotEmpty({ message: 'Valor Hora não pode ser vazio' })
  @Min(10, { message: 'Valor Hora deve ser no mínimo 10' })
  @Max(500, { message: 'Valor Hora deve ser no máximo 500' })
  valorHora: number;

  @IsNotEmpty({ message: 'Password não pode ser vazio' })
  @Length(6)
  password: string;

  @Expose({ name: 'password_confirmation' })
  @IsNotEmpty({ message: 'Password Confirmation não pode ser vazio' })
  @Length(6)
  @Match('password')
  passwordConfirmation: string;
}
