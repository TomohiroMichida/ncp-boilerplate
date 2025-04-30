import { ExampleServiceClient } from '../../service-client/example-service-client';
import { HelloResponseDto } from '../../types/hello';

export class GetHelloMessageUseCase {
  private readonly exampleSvcClient: ExampleServiceClient;

  constructor() {
    this.exampleSvcClient = new ExampleServiceClient();
  }

  async execute(): Promise<HelloResponseDto> {
    const response = await this.exampleSvcClient.fetchHelloMessage();
    return response;
  }
}
