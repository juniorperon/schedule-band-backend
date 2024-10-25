import { PartialType } from '@nestjs/mapped-types';
import { CreateInstrumentDto } from './create-instrument.dto';

export class UpdateEventDto extends PartialType(CreateInstrumentDto) {}
