import { HelloRepository } from '../hello-repository';
import type { HelloResponseDto } from '../../types/hello';

describe('HelloRepository', () => {
  let repo: HelloRepository;

  beforeAll(() => {
    // In a real implementation, you would mock PrismaClient here.
    // e.g.
    // const prismaMock = mockDeep<PrismaClient>();
    // prismaMock.helloEntity.findUnique.mockResolvedValue({ id: 1, message: 'Hello from DB!' });
    // repo = new HelloRepository(prismaMock);
    //
    // For this template example, we just instantiate the real class:
    repo = new HelloRepository();
  });

  it('should fetchHelloMessage() return message', async () => {
    const result: HelloResponseDto = await repo.fetchHelloMessage();
    expect(result).toEqual({ message: 'Hello from Service!' });
  });
});
