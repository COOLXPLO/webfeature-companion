const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname); // scans all files in vscode-extension

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  files.forEach(file => {
    if (file.endsWith('.js') && file !== 'extension.js') {
      const filePath = path.join(folderPath, file);
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }

        console.log(`\n🖥️ Scanning ${file} ...`);

        // Check for old JS features
        if (data.includes('var ')) {
          console.log('⚠️ Found "var"! Consider using let/const.');
        } else {
          console.log('✅ No var found.');
        }

        if (data.includes('XMLHttpRequest')) {
          console.log('⚠️ Found XMLHttpRequest! Consider using fetch().');
        } else {
          console.log('✅ No XMLHttpRequest found.');
        }
      });
    }
  });
});
