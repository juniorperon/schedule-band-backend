import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusiciansModule } from './musicians/musicians.module';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'band_schedule',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MusiciansModule,
    AuthModule,
    EventsModule,
  ],
})
export class AppModule {}
