import { IHelloRepository } from './hello-repository.interface';
import { HelloResponseDto } from '../types/hello';

export class HelloRepository implements IHelloRepository {
  async fetchHelloMessage(): Promise<HelloResponseDto> {
    // Replace with actual Prisma DB call.
    return { message: 'Hello from Service!' };
  }
}
