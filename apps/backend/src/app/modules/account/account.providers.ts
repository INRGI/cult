import { Provider } from "@nestjs/common";
import { CreateAccountService } from "./commands/create-account/create-account.service";
import { DeleteAccountService } from "./commands/delete-account/delete-account.service";
import { UpdateAccountService } from "./commands/update-account/update-account.service";

export const messageControllers = [];

export const queryProviders: Provider[] = [];

export const serviceProviders: Provider[] = [
  CreateAccountService,
  DeleteAccountService,
  UpdateAccountService,
];
