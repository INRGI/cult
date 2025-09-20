import { Provider } from "@nestjs/common";
import { CreateAccountService } from "./commands/create-account/create-account.service";
import { DeleteAccountService } from "./commands/delete-account/delete-account.service";
import { UpdateAccountService } from "./commands/update-account/update-account.service";
import { GetAccountByIdQueryService } from "./queries/get-account-by-id.query-service";

export const messageControllers = [];

export const queryProviders: Provider[] = [GetAccountByIdQueryService];

export const serviceProviders: Provider[] = [
  CreateAccountService,
  DeleteAccountService,
  UpdateAccountService,
];
