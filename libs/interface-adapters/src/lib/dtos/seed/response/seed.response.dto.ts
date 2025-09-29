import { IsString, Length } from "class-validator";

export class SeedResponseDto {
  @IsString()
  @Length(1, 50)
  public email: string;

  @IsString()
  public ownerId: string;
}
