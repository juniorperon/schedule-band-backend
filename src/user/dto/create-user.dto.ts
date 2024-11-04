export class CreateUserDto {
  id?:number;
  email: string;
  password: string;
  refreshToken?: string;
}
