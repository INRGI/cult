import { Injectable } from "@nestjs/common";
import { SeedRepository } from "../../../../infrastructure/database/repositories/seed/seed.repository";
import { Seed } from "../../../../infrastructure/database/schemas/seed.schema";
import { CreateSeedPayload } from "./create-seed.payload";

@Injectable()
export class CreateSeedService {
  constructor(private readonly seedRepository: SeedRepository) {}

  public async execute(payload: CreateSeedPayload): Promise<Seed> {
    const seed = await this.seedRepository.create(payload);

    return seed;
  }
}
