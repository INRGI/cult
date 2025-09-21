import { Module } from "@nestjs/common";
import {
  messageControllers,
  queryProviders,
  serviceProviders,
} from "./seed.providers";
import { SeedRepositoryModule } from "../../infrastructure/database/repositories/seed/seed.repository.module";

@Module({
  imports: [SeedRepositoryModule],
  controllers: [...messageControllers],
  providers: [...serviceProviders, ...queryProviders],
  exports: [...serviceProviders, ...queryProviders],
})
export class SeedModule {}
