import {
  createParamDecorator,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

export const RequestHeader = createParamDecorator(
  async (targetDto: any, ctx: ExecutionContext) => {
    const headers = ctx.switchToHttp().getRequest().headers;

    const dto = plainToInstance(targetDto, headers, {
      excludeExtraneousValues: true,
    });

    try {
      await validateOrReject(dto);
    } catch (errors) {
      const validationErrors = errors.map((err) => ({
        property: err.property,
        constraints: err.constraints,
      }));

      throw new BadRequestException({
        statusCode: 400,
        message: 'Header validation failed',
        errors: validationErrors,
      });
    }
    
    return dto;
  },
);
