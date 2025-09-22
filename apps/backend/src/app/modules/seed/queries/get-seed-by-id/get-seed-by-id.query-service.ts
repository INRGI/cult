import { Injectable } from "@nestjs/common";
import { SeedRepository } from "../../../../infrastructure/database/repositories/seed/seed.repository";
import { GetSeedByIdPayload } from "./get-seed-by-id.payload";
import { SeedProps } from "../../domain/types/seed.types";

@Injectable()
export class GetSeedByIdQueryService {
  constructor(private readonly seedRepository: SeedRepository) {}

  public async execute(payload: GetSeedByIdPayload): Promise<SeedProps> {
    const seed = await this.seedRepository.findById(payload.id);

    return seed;
  }
}
