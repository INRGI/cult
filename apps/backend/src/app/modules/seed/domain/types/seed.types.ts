export interface CreateSeedProps {
  email: string;
  ownerId: string;
}

export type SeedProps = CreateSeedProps;

export interface UpdateSeedProps {
  readonly email: string;
  readonly ownerId: string;
}
