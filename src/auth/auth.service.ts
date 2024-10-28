import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  private readonly logger = new Logger(AuthService.name);
  async login(loginDto: LoginDto): Promise<{ token: string }> {
    try {
      const user = await this.userRepository.findOne({
        where: { email: loginDto.email },
      });
      if (!user) {
        throw new NotFoundException('Usuário não encontrado');
      }

      const isPasswordValid = await bcrypt.compare(
        loginDto.password,
        user.password,
      );
      if (!isPasswordValid) {
        throw new UnauthorizedException('Senha inválida');
      }

      const token = this.jwtService.sign({ id: user.id });
      return { token };
    } catch (error) {
      this.logger.error(
        `Erro ao realizar login: ${error.message}`,
        error.stack,
      );
      if (
        error instanceof NotFoundException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      }
      throw new InternalServerErrorException('Erro ao realizar login'); // Para erros desconhecidos
    }
  }
}
