import { Module } from "@nestjs/common";
import { AccountRepositoryModule } from "../../infrastructure/database/repositories/account/account.repository.module";
import {
  messageControllers,
  queryProviders,
  serviceProviders,
} from "./account.providers";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [AccountRepositoryModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: "7d" },
    }),
  ],
  controllers: [...messageControllers],
  providers: [...serviceProviders, ...queryProviders],
  exports: [...serviceProviders, ...queryProviders],
})
export class AccountModule {}
