import { Module } from "@nestjs/common";
import { AccountRepositoryModule } from "../../infrastructure/database/repositories/account/account.repository.module";

@Module({
  imports: [AccountRepositoryModule],
  providers: [],
  exports: [],
})
export class AccountModule {}
