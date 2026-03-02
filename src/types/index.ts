export interface MediaStoreConfig {
  apiKey: string;
  baseUrl?: string;
}

export interface File {
  id: number;
  original_name: string;
  size: number;
  size_mb: number;
  type: string;
  url: string;
  variants?: Record<string, string>;
  uploaded_at: string;
}

export interface Account {
  id: number;
  email: string;
  storage_used_mb: number;
  storage_limit_mb: number;
  storage_percentage: number;
  created_at: string;
}

export interface APIKey {
  id: number;
  key: string;
  name: string;
  is_active: boolean;
  last_used_at?: string;
  created_at: string;
}

export interface UsageStats {
  total_files: number;
  total_images: number;
  total_documents: number;
  storage_used_mb: number;
  storage_limit_mb: number;
  files_by_type?: Array<{ type: string; count: number }>;
  recent_uploads?: Array<{ date: string; count: number }>;
  largest_file?: { name: string; size_mb: number };
  oldest_file?: { name: string; uploaded_at: string };
  newest_file?: { name: string; uploaded_at: string };
}

export interface UploadResponse {
  success: boolean;
  file: File;
}

export interface ListResponse {
  success: boolean;
  count: number;
  files: File[];
}

export interface AccountResponse {
  success: boolean;
  account: Account;
}

export interface StatsResponse {
  success: boolean;
  stats: UsageStats;
}

export interface KeysResponse {
  success: boolean;
  count: number;
  keys: APIKey[];
}

export interface ErrorResponse {
  success: false;
  error: string;
}