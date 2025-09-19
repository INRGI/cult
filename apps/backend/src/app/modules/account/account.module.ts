import { Module } from "@nestjs/common";
import { AccountRepositoryModule } from "../../infrastructure/database/repositories/account/account.repository.module";
import {
  messageControllers,
  queryProviders,
  serviceProviders,
} from "./account.providers";

@Module({
  imports: [AccountRepositoryModule],
  controllers: [...messageControllers],
  providers: [...serviceProviders, ...queryProviders],
  exports: [...serviceProviders, ...queryProviders],
})
export class AccountModule {}
