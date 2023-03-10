import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateTaskDto {
  @IsNumber()
  @IsNotEmpty()
  TaskId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;
}
