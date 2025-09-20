import { Provider } from "@nestjs/common";
import { CreateSeedService } from "./commands/create-seed/create-seed.service";
import { DeleteSeedService } from "./commands/delete-seed/delete-seed.service";
import { UpdateSeedService } from "./commands/update-seed/update-seed.service";

export const messageControllers = [];

export const queryProviders: Provider[] = [];

export const serviceProviders: Provider[] = [
  CreateSeedService,
  DeleteSeedService,
  UpdateSeedService,
];
