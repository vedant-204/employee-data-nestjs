import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export default class UpdateEmployeeDto {

  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  @IsNotEmpty()
  position: string;
}
