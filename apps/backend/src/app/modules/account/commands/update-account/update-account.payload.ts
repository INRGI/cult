import { UpdateAccountProps } from "../../domain/types/account.types";

export interface UpdateAccountPayload extends UpdateAccountProps {
  readonly id: string;
}
