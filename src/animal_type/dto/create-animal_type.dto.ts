import { IsString } from 'class-validator';

export class CreateAnimalTypeDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
