import { IsOptional, IsString, Length } from "class-validator";

export class UpdateSeedRequestDto {
  @IsString()
  public id: string;

  @IsString()
  @Length(1, 50)
  @IsOptional()
  public email: string;

  @IsString()
  public ownerId: string;
}
