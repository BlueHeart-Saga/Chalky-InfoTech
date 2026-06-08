const path = require('path');
const fs = require('fs');
const sharp = require(path.join(__dirname, '../node_modules/sharp'));

async function generate() {
  const iconSource = path.join(__dirname, '../public/icon.png');
  const faviconPngPath = path.join(__dirname, '../public/favicon.png');
  const faviconIcoPath = path.join(__dirname, '../public/favicon.ico');

  console.log('Generating favicons from:', iconSource);

  // 1. Generate favicon.png at 192x192
  await sharp(iconSource)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(faviconPngPath);
  console.log('Created public/favicon.png (192x192)');

  // 2. Generate favicon.ico at 48x48
  await sharp(iconSource)
    .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(faviconIcoPath);
  console.log('Created public/favicon.ico (48x48)');
}

generate().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
