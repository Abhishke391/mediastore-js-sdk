export const DEFAULT_BASE_URL = 'http://localhost:8081';

export interface Config {
  apiKey: string;
  baseUrl: string;
}

export function createConfig(apiKey: string, baseUrl?: string): Config {
  return {
    apiKey,
    baseUrl: baseUrl || DEFAULT_BASE_URL,
  };
}