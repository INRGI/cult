import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { MongooseModule } from "@nestjs/mongoose";
import { TaskModule } from "./infrastructure/tasks/task.module";
import { AccountModule } from "./modules/account/account.module";
import { SeedModule } from "./modules/seed/seed.module";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "frontend"),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AccountModule,
    SeedModule,
    TaskModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>("MONGODB_URL"),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
