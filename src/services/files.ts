import axios, { AxiosInstance } from 'axios';
import FormData from 'form-data';
import { File, UploadResponse, ListResponse } from '../types';

export class FilesService {
  constructor(private http: AxiosInstance) {}

  /**
   * Upload a file
   * @param file - File to upload (File object in browser, path string in Node.js)
   * @returns Promise with uploaded file details
   */
  async upload(file: globalThis.File | string): Promise<File> {
    const formData = new FormData();

    if (typeof file === 'string') {
      // Node.js: file path
      const fs = await import('fs');
      const path = await import('path');
      formData.append('file', fs.createReadStream(file), path.basename(file));
    } else {
      // Browser: File object
      formData.append('file', file, file.name);
    }

    const response = await this.http.post<UploadResponse>('/api/upload', formData, {
      headers: formData.getHeaders ? formData.getHeaders() : {},
    });

    return response.data.file;
  }

  /**
   * List all files
   * @returns Promise with array of files
   */
  async list(): Promise<File[]> {
    const response = await this.http.get<ListResponse>('/api/files');
    return response.data.files;
  }

  /**
   * Get a specific file by ID
   * @param id - File ID
   * @returns Promise with file details
   */
  async get(id: number): Promise<File> {
    const response = await this.http.get<{ success: boolean; file: File }>(`/api/files/${id}`);
    return response.data.file;
  }

  /**
   * Rename a file
   * @param id - File ID
   * @param newName - New file name
   * @returns Promise with updated file details
   */
  async rename(id: number, newName: string): Promise<File> {
    const response = await this.http.patch<{ success: boolean; file: File }>(
      `/api/files/${id}`,
      { original_name: newName }
    );
    return response.data.file;
  }

  /**
   * Delete a file
   * @param id - File ID
   * @returns Promise that resolves when deleted
   */
  async delete(id: number): Promise<void> {
    await this.http.delete(`/api/files/${id}`);
  }
}