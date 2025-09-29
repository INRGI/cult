import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { GetPaginatedSeedsQueryService } from "../queries/get-paginated-seeds/get-paginated-seeds.query-service";
import { GetSeedByIdQueryService } from "../queries/get-seed-by-id/get-seed-by-id.query-service";
import { UpdateSeedService } from "../commands/update-seed/update-seed.service";
import { DeleteSeedService } from "../commands/delete-seed/delete-seed.service";
import { CreateSeedService } from "../commands/create-seed/create-seed.service";
import {
    CreateSeedRequestDto,
    SeedResponseDto,
    SeedsPaginatedResponseDto,
    UpdateSeedRequestDto,} from '@epc-services/interface-adapters'

@Controller("seed")
export class SeedController {
  constructor(
    private readonly getPaginatedSeedsQueryService: GetPaginatedSeedsQueryService,
    private readonly getSeedByIdService: GetSeedByIdQueryService,
    private readonly updateSeedService: UpdateSeedService,
    private readonly deleteSeedService: DeleteSeedService,
    private readonly createSeedService: CreateSeedService
  ) {}

  @Get("paginated")
  public async getPaginatedSeeds(): Promise<SeedsPaginatedResponseDto> {
    const found = await this.getPaginatedSeedsQueryService.execute();
    return { items: found };
  }

  @Get(":id")
  public async getSeedById(
    @Param("id") id: string
  ): Promise<SeedResponseDto> {
    const result = await this.getSeedByIdService.execute({
      id: id,
    });
    return result;
  }

  @Put("update")
  public async updateSeed(
    @Body() body: UpdateSeedRequestDto
  ): Promise<SeedResponseDto> {
    const entity = await this.updateSeedService.execute(body);
    return entity;
  }

  @Delete(":id")
  public async deleteSeed(@Param("id") id: string): Promise<void> {
    await this.deleteSeedService.execute({
      id,
    });
  }

  @Post("create")
  public async createSeed(
    @Body() body: CreateSeedRequestDto
  ): Promise<SeedResponseDto> {
    const result = await this.createSeedService.execute(body);
    return result;
  }
}
