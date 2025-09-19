export interface CreateAccountProps {
  email: string;
  name: string;
  isAdmin: boolean;
}

export type AccountProps = CreateAccountProps;

export interface UpdateAccountProps {
  readonly name: string;
  readonly email: string;
  readonly isAdmin: boolean;
}
