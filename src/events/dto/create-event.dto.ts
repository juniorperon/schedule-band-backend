export class CreateEventDto {
  date: string;
  musicians: { id: number; fullName: string; instrument: string }[];
}
