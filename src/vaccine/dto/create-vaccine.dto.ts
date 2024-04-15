import { IsString } from "class-validator"

export class CreateVaccineDto {
  @IsString()
  type: string;

  @IsString()
  name: string;
}
