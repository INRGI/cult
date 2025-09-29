import { IsString } from "class-validator";

export class DeleteSeedRequestDto {
  @IsString()
  public _id: string
}
