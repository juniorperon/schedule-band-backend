import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicianModule } from './musicians/musicians.module';
import { EventsModule } from './events/events.module';
import { InstrumentsModule } from './instrument/instrument.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'musicdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MusicianModule,
    EventsModule,
    InstrumentsModule,
  ],
})
export class AppModule {}
