import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Account, AccountSchema } from "../../schemas/account.schema";
import { AccountRepository } from "./account.repository";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  ],
  providers: [AccountRepository],
  exports: [AccountRepository],
})
export class AccountRepositoryModule {}
