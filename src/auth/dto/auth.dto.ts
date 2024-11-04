export class UserDto {
  id?: number;
  email: string;
  password?: string;
  refreshToken?: string;
}

export class LoginDto {
  id: number;
  email: string;
  password: string;
}

export class SignUpDto {
  email: string;
  password: string;
}

export class AuthenticatedUser {
  id?: number;
  email: string;
  accessToken: string;
  refreshToken: string;
}
