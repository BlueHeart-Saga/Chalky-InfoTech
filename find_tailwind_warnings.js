const fs = require('fs');
const path = require('path');

const patterns = [
  'duration-[1.2s]',
  'duration-[1000ms]',
  'duration-[10s]',
  'duration-[800ms]',
  'ease-[cubic-bezier(0.16,1,0.3,1)]',
  'ease-[cubic-bezier(0.165,0.84,0.44,1)]',
  'ease-[cubic-bezier(0.4,0,0.2,1)]'
];

function searchDir(dir) {
  let files;
  try {
    files = fs.readdirSync(dir);
  } catch (e) {
    return;
  }
  for (const file of files) {
    const fullPath = path.join(dir, file);
    let stat;
    try {
      stat = fs.statSync(fullPath);
    } catch (e) {
      continue;
    }
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        searchDir(fullPath);
      }
    } else {
      if (file !== 'find_tailwind_warnings.js') {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          patterns.forEach(pat => {
            if (content.includes(pat)) {
              console.log(`Found "${pat}" in ${fullPath}`);
            }
          });
        } catch (e) {}
      }
    }
  }
}

searchDir('c:\\chalky');
console.log("Search finished.");
