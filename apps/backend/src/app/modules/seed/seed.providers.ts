import { Provider } from "@nestjs/common";
import { CreateSeedService } from "./commands/create-seed/create-seed.service";
import { DeleteSeedService } from "./commands/delete-seed/delete-seed.service";
import { UpdateSeedService } from "./commands/update-seed/update-seed.service";
import { GetPaginatedSeedsQueryService } from "./queries/get-paginated-seeds/get-paginated-seeds.query-service";
import { GetSeedByIdQueryService } from "./queries/get-seed-by-id/get-seed-by-id.query-service";

export const messageControllers = [];

export const queryProviders: Provider[] = [
  GetPaginatedSeedsQueryService,
  GetSeedByIdQueryService,
];

export const serviceProviders: Provider[] = [
  CreateSeedService,
  DeleteSeedService,
  UpdateSeedService,
];
