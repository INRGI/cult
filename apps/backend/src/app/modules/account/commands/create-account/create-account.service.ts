import { Injectable } from "@nestjs/common";
import { AccountRepository } from "../../../../infrastructure/database/repositories/account/account.repository";
import { CreateAccountPayload } from "./create-account.payload";
import { Account } from "../../../../infrastructure/database/schemas/account.schema";

@Injectable()
export class CreateAccountService {
  constructor(private readonly accountRepository: AccountRepository) {}

  public async execute(payload: CreateAccountPayload): Promise<Account> {
    const broadcastRules = await this.accountRepository.create(payload);

    return broadcastRules;
  }
}
