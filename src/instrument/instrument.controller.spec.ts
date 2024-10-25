import { InstrumentsController } from './instrument.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { InstrumentsService } from './instrument.service';

describe('InstrumentsController', () => {
  let controller: InstrumentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstrumentsController],
      providers: [InstrumentsService],
    }).compile();

    controller = module.get<InstrumentsController>(InstrumentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
