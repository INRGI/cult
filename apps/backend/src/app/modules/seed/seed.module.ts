import { Module } from "@nestjs/common";
import {
  messageControllers,
  queryProviders,
  serviceProviders,
} from "./seed.providers";

@Module({
  imports: [SeedRepositoryModule],
  controllers: [...messageControllers],
  providers: [...serviceProviders, ...queryProviders],
  exports: [...serviceProviders, ...queryProviders],
})
export class SeedModule {}
