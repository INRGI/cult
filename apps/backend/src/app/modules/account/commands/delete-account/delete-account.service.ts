import { Injectable } from "@nestjs/common";
import { AccountRepository } from "../../../../infrastructure/database/repositories/account/account.repository";
import { DeleteAccountPayload } from "./delete-account.payload";

@Injectable()
export class DeleteAccountService {
  constructor(private readonly accountRepository: AccountRepository) {}

  public async execute(payload: DeleteAccountPayload): Promise<void> {
    const account = await this.accountRepository.delete(payload.id);
  }
}
