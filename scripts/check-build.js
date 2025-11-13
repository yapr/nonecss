const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '..', 'dist', 'none.min.css');

try {
  const stats = fs.statSync(file);
  if (!stats.isFile() || stats.size === 0) {
    console.error(`Build artifact ${file} is missing or empty.`);
    process.exit(1);
  }
  console.log(`Found build artifact: ${file} (${stats.size} bytes)`);
  process.exit(0);
} catch (err) {
  console.error(`Build artifact ${file} not found. Did the build step succeed?`);
  process.exit(1);
}