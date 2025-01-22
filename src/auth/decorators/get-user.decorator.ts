import { createParamDecorator } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { Professor } from 'src/professores/entities/professor.entity';

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContextHost): Professor => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
