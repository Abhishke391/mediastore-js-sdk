import { AxiosInstance } from 'axios';
import { Account, AccountResponse, UsageStats, StatsResponse } from '../types';

export class AccountService {
  constructor(private http: AxiosInstance) {}

  /**
   * Get account information
   * @returns Promise with account details
   */
  async get(): Promise<Account> {
    const response = await this.http.get<AccountResponse>('/api/account');
    return response.data.account;
  }

  /**
   * Get usage statistics
   * @returns Promise with usage stats
   */
  async stats(): Promise<UsageStats> {
    const response = await this.http.get<StatsResponse>('/api/account/stats');
    return response.data.stats;
  }
}