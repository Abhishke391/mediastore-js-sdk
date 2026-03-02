import axios, { AxiosInstance } from 'axios';
import { MediaStoreConfig } from './types';
import { createConfig } from './config';
import { FilesService } from './services/files';
import { AccountService } from './services/account';
import { KeysService } from './services/keys';

export class MediaStore {
  private http: AxiosInstance;
  public files: FilesService;
  public account: AccountService;
  public keys: KeysService;

  constructor(apiKey: string, baseUrl?: string);
  constructor(config: MediaStoreConfig);
  constructor(apiKeyOrConfig: string | MediaStoreConfig, baseUrl?: string) {
    const config =
      typeof apiKeyOrConfig === 'string'
        ? createConfig(apiKeyOrConfig, baseUrl)
        : createConfig(apiKeyOrConfig.apiKey, apiKeyOrConfig.baseUrl);

    // Create axios instance
    this.http = axios.create({
      baseURL: config.baseUrl,
      headers: {
        'X-API-Key': config.apiKey,
      },
    });

    // Add response interceptor for error handling
    this.http.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.data?.error) {
          throw new Error(error.response.data.error);
        }
        throw error;
      }
    );

    // Initialize services
    this.files = new FilesService(this.http);
    this.account = new AccountService(this.http);
    this.keys = new KeysService(this.http);
  }
}