import { Module } from "@nestjs/common";
import {
  messageControllers,
  queryProviders,
  serviceProviders,
} from "./seed.providers";
import { SeedRepositoryModule } from "../../infrastructure/database/repositories/seed/seed.repository.module";
import { AccountRepositoryModule } from "../../infrastructure/database/repositories/account/account.repository.module";

@Module({
  imports: [SeedRepositoryModule, AccountRepositoryModule],
  controllers: [...messageControllers],
  providers: [...serviceProviders, ...queryProviders],
  exports: [...serviceProviders, ...queryProviders],
})
export class SeedModule {}
