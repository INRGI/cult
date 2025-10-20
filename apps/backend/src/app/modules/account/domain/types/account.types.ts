export interface CreateAccountProps {
  email: string;
  name: string;
  isAdmin: boolean;
  level: number;
  avatar?: string;
}

export type AccountProps = CreateAccountProps;

export interface UpdateAccountProps {
  readonly name: string;
  readonly email: string;
  readonly isAdmin: boolean;
  readonly level: number;
  readonly avatar?: string;
}
