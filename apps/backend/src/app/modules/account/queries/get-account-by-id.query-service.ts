import { Injectable } from "@nestjs/common";
import { AccountRepository } from "../../../infrastructure/database/repositories/account/account.repository";
import { GetAccountByIdPayload } from "./get-account-by-id.payload";
import { AccountProps } from "../domain/types/account.types";

@Injectable()
export class GetAccountByIdQueryService {
  constructor(private readonly accountRepository: AccountRepository) {}

  public async execute(payload: GetAccountByIdPayload): Promise<AccountProps> {
    const account = await this.accountRepository.findById(payload.id);

    return account;
  }
}
