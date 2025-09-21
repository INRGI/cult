import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Seed, SeedSchema } from "../../schemas/seed.schema";
import { SeedRepository } from "./seed.repository";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Seed.name, schema: SeedSchema }]),
  ],
  providers: [SeedRepository],
  exports: [SeedRepository],
})
export class SeedRepositoryModule {}
