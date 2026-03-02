# MediaStore JavaScript SDK

[![npm version](https://img.shields.io/npm/v/@abhishke391/mediastore.svg)](https://www.npmjs.com/package/@abhishke391/mediastore)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Modern JavaScript/TypeScript SDK for MediaStore - Fast file storage with automatic image optimization and variant generation.

## ✨ Features

- 🚀 **Fast & Modern**: Built with TypeScript, works everywhere
- 📦 **Lightweight**: Minimal dependencies
- 🖼️ **Auto Image Variants**: Automatic thumbnail, medium, and large sizes
- 🔐 **Secure**: API key authentication
- 🌐 **Universal**: Works in Node.js and browsers (with bundler)
- 📘 **TypeScript**: Full type definitions included
- ⚡ **Parallel Processing**: Powered by Go backend with goroutines

## 📦 Installation

### npm
```bash
npm install @abhishke391/mediastore
```

### yarn
```bash
yarn add @abhishke391/mediastore
```

### pnpm
```bash
pnpm add @abhishke391/mediastore
```

## 🚀 Quick Start

### JavaScript (Node.js)
```javascript
const { MediaStore } = require('@abhishke391/mediastore');

const client = new MediaStore('sk_live_your_api_key');

// Upload a file
const file = await client.files.upload('./photo.jpg');
console.log('✓ Uploaded:', file.url);
console.log('✓ Variants:', file.variants);

// List files
const files = await client.files.list();
console.log('✓ Total files:', files.length);

// Get account info
const account = await client.account.get();
console.log(`✓ Storage: ${account.storage_used_mb} MB`);
```

### TypeScript
```typescript
import { MediaStore } from '@abhishke391/mediastore';
import type { File, Account } from '@abhishke391/mediastore';

const client = new MediaStore({
  apiKey: 'sk_live_your_api_key',
  baseUrl: 'http://localhost:8080'
});

const file: File = await client.files.upload('./photo.jpg');
const account: Account = await client.account.get();
```

### ES Modules
```javascript
import { MediaStore } from '@abhishke391/mediastore';

const client = new MediaStore('sk_live_your_api_key');
const files = await client.files.list();
```

## 📖 API Documentation

### Constructor
```typescript
// Simple initialization
const client = new MediaStore('your_api_key');

// With custom configuration
const client = new MediaStore({
  apiKey: 'your_api_key',
  baseUrl: 'https://api.mediastore.com'
});
```

### Files API

#### Upload
```typescript
const file = await client.files.upload(fileOrPath);
// Returns: { id, original_name, url, variants, size_mb, type, uploaded_at }
```

#### List
```typescript
const files = await client.files.list();
// Returns: Array of file objects
```

#### Get
```typescript
const file = await client.files.get(fileId);
```

#### Rename
```typescript
const file = await client.files.rename(fileId, 'new-name.jpg');
```

#### Delete
```typescript
await client.files.delete(fileId);
```

### Account API

#### Get Info
```typescript
const account = await client.account.get();
// Returns: { email, storage_used_mb, storage_limit_mb, storage_percentage }
```

#### Get Stats
```typescript
const stats = await client.account.stats();
// Returns: { total_files, total_images, total_documents, largest_file, ... }
```

### API Keys API

#### List
```typescript
const keys = await client.keys.list();
```

#### Create
```typescript
const key = await client.keys.create('Production Key');
```

#### Rename
```typescript
await client.keys.rename(keyId, 'New Name');
```

#### Revoke
```typescript
await client.keys.revoke(keyId);
```

## 🔧 Configuration
```typescript
interface MediaStoreConfig {
  apiKey: string;        // Required: Your MediaStore API key
  baseUrl?: string;      // Optional: API base URL (default: http://localhost:8080)
}
```

## 📝 TypeScript Support

Full TypeScript support with exported types:
```typescript
import type {
  MediaStoreConfig,
  File,
  Account,
  APIKey,
  UsageStats
} from '@abhishke391/mediastore';
```

## 🌐 Browser Usage

Works in browsers with bundlers (Webpack, Vite, Rollup):
```javascript
import { MediaStore } from '@abhishke391/mediastore';

const client = new MediaStore('sk_live_your_api_key');

// Upload from file input
const fileInput = document.querySelector('input[type="file"]');
const file = await client.files.upload(fileInput.files[0]);

// Display with variants
img.src = file.variants.thumbnail;
```

## 🔗 Related Projects

- [MediaStore Java SDK](https://github.com/Abhishke391/mediastore-java-sdk) - Java/Spring Boot SDK
- [MediaStore Go Backend](https://github.com/Abhishke391/mediastore) - Backend service

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © [Abhishke391](https://github.com/Abhishke391)

## 🐛 Issues

Found a bug? Please [open an issue](https://github.com/Abhishke391/mediastore-js-sdk/issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!