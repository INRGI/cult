import { IsString, Length } from "class-validator";

export class CreateSeedRequestDto {
  @IsString()
  @Length(1, 50)
  public email: string;

  @IsString()
  public ownerId: string;
}
