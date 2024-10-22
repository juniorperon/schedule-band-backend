import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    UsersModule, 
    JwtModule.register({
      secret: 'secretKey', 
      signOptions: { expiresIn: '1h' }, a
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
