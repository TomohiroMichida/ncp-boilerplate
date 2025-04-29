import { GetHelloMessageUseCase } from '../usecase/hello/get-hello-message-usecase';
import { HelloResponseDto } from '../types/hello';

export class ExampleController {
  async getHelloMessage(): Promise<HelloResponseDto> {
    const usecase = new GetHelloMessageUseCase();
    return await usecase.execute();
  }
}
