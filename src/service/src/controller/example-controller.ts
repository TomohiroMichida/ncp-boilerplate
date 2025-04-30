import { IHelloRepository } from '../repository/hello-repository.interface';
import { HelloRepository } from '../repository/hello-repository';
import { HelloResponseDto } from '../types/hello';

export class ExampleController {
  private readonly repository: IHelloRepository;

  constructor(repository: IHelloRepository = new HelloRepository()) {
    this.repository = repository;
  }

  async getHelloMessage(): Promise<HelloResponseDto> {
    return await this.repository.fetchHelloMessage();
  }
}
