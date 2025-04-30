import axios, { AxiosInstance } from 'axios';
import { HelloResponseDto } from '../types/hello';

export interface IExampleServiceClient {
  fetchHelloMessage(): Promise<HelloResponseDto>;
}

export class ExampleServiceClient implements IExampleServiceClient {
  private readonly client: AxiosInstance;

  constructor() {
    const baseURL = process.env.SERVICE_API_URL || 'http://localhost:5000';
    this.client = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 5000,
    });
  }

  async fetchHelloMessage(): Promise<{ message: string }> {
    const response = await this.client.get('/api/hello');
    return response.data;
  }
}
