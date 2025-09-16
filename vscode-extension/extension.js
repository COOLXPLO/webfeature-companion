const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'sample.js'); // Demo file

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log('🖥️ WebFeature Companion Scan Results:');

  // Detect old JS features
  if (data.includes('var ')) {
    console.log('⚠️ Found "var"! Consider using let/const.');
  } else {
    console.log('✅ No old JS features found.');
  }

  if (data.includes('XMLHttpRequest')) {
    console.log('⚠️ Found XMLHttpRequest! Consider using fetch().');
  } else {
    console.log('✅ Modern fetch API is used.');
  }
});
