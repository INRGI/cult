import { UpdateSeedProps } from "../../domain/types/seed.types";

export interface UpdateSeedPayload extends UpdateSeedProps {
  readonly id: string;
}
