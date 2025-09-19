import { Injectable } from "@nestjs/common";
import { AccountRepository } from "../../../../infrastructure/database/repositories/account/account.repository";
import { UpdateAccountPayload } from "./update-account.payload";
import { UpdateAccountProps } from "../../domain/types/account.types";

@Injectable()
export class UpdateAccountService {
  constructor(private readonly accountRepository: AccountRepository) {}

  public async execute(
    payload: UpdateAccountPayload
  ): Promise<UpdateAccountProps> {
    const Account = await this.accountRepository.findById(payload.id);

    if (!Account) {
      throw new Error("Broadcast rules not found");
    }

    const updatedAccount = await this.accountRepository.update(payload.id, {
      name: payload.name,
      email: payload.email,
      isAdmin: payload.isAdmin,
    });

    return updatedAccount;
  }
}
