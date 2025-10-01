import { IsOptional, IsString, Length } from "class-validator";
import { Isp } from "../../../interfaces";

export class UpdateSeedRequestDto {
  @IsString()
  public id: string;

  @IsString()
  @Length(1, 50)
  @IsOptional()
  public email: string;

  @IsString()
  public ownerId: string;

  @IsString()
  public isp: Isp;
}
