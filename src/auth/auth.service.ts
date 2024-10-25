import {
  Controller,
  Get,
  UseGuards,
  Request,
  Injectable,
} from '@nestjs/common';
// import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
// import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    // private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    // const user = await this.usersService.findByEmail(email);
    // if (user && user.password === password) {
    // const { password, ...result } = user;
    // return result;
  }
  // return null;
}

//   async login(user: any) {
//     const payload = { username: user.email, sub: user.id };
//     return {
//       access_token: this.jwtService.sign(payload),
//     };
//   }
// }

// @Controller('auth')
// export class AuthController {
//   // Nova rota para validar o token
//   @UseGuards(JwtAuthGuard)
//   @Get('validate-token')
//   validateToken(@Request() req) {
//     return { message: 'Token is valid' };
// }
// }
