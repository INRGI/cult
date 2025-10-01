import { IsString, Length } from "class-validator";
import { Isp } from "../../../interfaces";

export class SeedResponseDto {
  @IsString()
  @Length(1, 50)
  public email: string;

  @IsString()
  public ownerId: string;

  @IsString()
  public isp: Isp;
}
