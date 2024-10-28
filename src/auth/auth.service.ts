import { Injectable } from '@nestjs/common';
import { UsersService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(loginDto: LoginDto): Promise<any> {
    const { email, password } = loginDto;
    const user = await this.userService.findOneByEmail(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      const token = this.jwtService.sign({
        email: result.email,
        sub: result.id,
      });
      return { ...result, token };
    }
  }
}
