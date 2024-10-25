import { Test, TestingModule } from '@nestjs/testing';
import { MusicianController } from './musicians.controller';
import { MusicianService } from './musicians.service';

describe('MusicianController', () => {
  let controller: MusicianController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicianController],
      providers: [MusicianService],
    }).compile();

    controller = module.get<MusicianController>(MusicianController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
