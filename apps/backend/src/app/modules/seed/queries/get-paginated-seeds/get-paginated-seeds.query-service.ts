import { Injectable } from "@nestjs/common";
import { SeedRepository } from "../../../../infrastructure/database/repositories/seed/seed.repository";
import { SeedProps } from "../../domain/types/seed.types";

@Injectable()
export class GetPaginatedSeedsQueryService {
  constructor(private readonly seedRepository: SeedRepository) {}

  public async execute(): Promise<SeedProps[]> {
    const seed = await this.seedRepository.findAll();

    return seed;
  }
}
