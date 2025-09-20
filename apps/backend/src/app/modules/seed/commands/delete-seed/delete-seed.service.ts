import { Injectable } from "@nestjs/common";
import { AccountRepository } from "../../../../infrastructure/database/repositories/account/account.repository";
import { DeleteSeedPayload } from "./delete-seed.payload";

@Injectable()
export class DeleteSeedService {
  constructor(private readonly seedRepository: AccountRepository) {}

  public async execute(payload: DeleteSeedPayload): Promise<void> {
    const seed = await this.seedRepository.delete(payload.id);
  }
}
