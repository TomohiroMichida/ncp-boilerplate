import { GetHelloMessageUseCase } from '../get-hello-message-usecase';
import { ExampleServiceClient } from '../../../service-client/example-service-client';
import { HelloResponseDto } from '../../../types/hello';

describe('GetHelloMessageUseCase', () => {
  const mockResponse: HelloResponseDto = { message: 'Hello from Service!' };

  beforeEach(() => {
    jest
      .spyOn(ExampleServiceClient.prototype, 'fetchHelloMessage')
      .mockResolvedValue(mockResponse);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should fetch hello message from service and return it', async () => {
    const usecase = new GetHelloMessageUseCase();
    const result = await usecase.execute();

    expect(ExampleServiceClient.prototype.fetchHelloMessage).toHaveBeenCalled();

    expect(result).toEqual(mockResponse);
  });
});
