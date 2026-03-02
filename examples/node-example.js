// This works with any export style
const MediaStoreModule = require('../dist/index.cjs.js');
const MediaStore = MediaStoreModule.MediaStore || MediaStoreModule.default || MediaStoreModule;

async function main() {
  console.log('MediaStore:', typeof MediaStore); // Debug: should show "function"
  
  const client = new MediaStore('sk_live_d78b543972b251b9027a6a2dcaa278fc', 'http://localhost:8081');

  try {
    console.log('=== MediaStore JS SDK Test ===\n');

    console.log('1. Getting account info...');
    const account = await client.account.get();
    console.log(`   ✓ Email: ${account.email}`);
    console.log(`   ✓ Storage: ${account.storage_used_mb.toFixed(2)} / ${account.storage_limit_mb.toFixed(2)} MB\n`);

    console.log('2. Listing files...');
    const files = await client.files.list();
    console.log(`   ✓ Found ${files.length} files\n`);

    console.log('3. Getting usage statistics...');
    const stats = await client.account.stats();
    console.log(`   ✓ Total files: ${stats.total_files}`);
    console.log(`   ✓ Images: ${stats.total_images}, Documents: ${stats.total_documents}\n`);

    console.log('4. Listing API keys...');
    const keys = await client.keys.list();
    console.log(`   ✓ Found ${keys.length} API keys\n`);

    console.log('✅ All tests passed! JS SDK working! 🎉\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

main();