import { Isp } from "@epc-services/interface-adapters";

export interface CreateSeedProps {
  email: string;
  ownerId: string;
  isp: Isp
}

export type SeedProps = CreateSeedProps;

export interface UpdateSeedProps {
  readonly email: string;
  readonly ownerId: string;
  readonly isp: Isp
}
