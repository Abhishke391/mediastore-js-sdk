import { AxiosInstance } from 'axios';
import { APIKey, KeysResponse } from '../types';

export class KeysService {
  constructor(private http: AxiosInstance) {}

  /**
   * List all API keys
   * @returns Promise with array of API keys
   */
  async list(): Promise<APIKey[]> {
    const response = await this.http.get<KeysResponse>('/api/keys');
    return response.data.keys;
  }

  /**
   * Create a new API key
   * @param name - Name for the new key
   * @returns Promise with the new API key
   */
  async create(name: string): Promise<APIKey> {
    const response = await this.http.post<{ success: boolean; api_key: APIKey }>(
      '/api/keys',
      { name }
    );
    return response.data.api_key;
  }

  /**
   * Rename an API key
   * @param id - Key ID
   * @param newName - New name
   * @returns Promise that resolves when renamed
   */
  async rename(id: number, newName: string): Promise<void> {
    await this.http.patch(`/api/keys/${id}`, { name: newName });
  }

  /**
   * Revoke an API key
   * @param id - Key ID
   * @returns Promise that resolves when revoked
   */
  async revoke(id: number): Promise<void> {
    await this.http.delete(`/api/keys/${id}`);
  }
}