import { Injectable } from "@nestjs/common";
import { UpdateSeedPayload } from "./update-seed.payload";
import { UpdateSeedProps } from "../../domain/types/seed.types";
import { SeedRepository } from "../../../../infrastructure/database/repositories/seed/seed.repository";

@Injectable()
export class UpdateSeedService {
  constructor(private readonly seedRepository: SeedRepository) {}

  public async execute(payload: UpdateSeedPayload): Promise<UpdateSeedProps> {
    const seed = await this.seedRepository.findById(payload.id);

    if (!seed) {
      throw new Error("Seed not found");
    }

    const updatedSeed = await this.seedRepository.update(payload.id, {
      email: payload.email,
    });

    return updatedSeed;
  }
}
