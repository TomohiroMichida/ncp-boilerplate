import { HelloResponseDto } from '../types/hello';

export interface IHelloRepository {
  fetchHelloMessage(): Promise<HelloResponseDto>;
}
