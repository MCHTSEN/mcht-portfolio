import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

async function generateOgImages() {
  const svgPath = join(publicDir, 'og-image.svg');
  const svgBuffer = readFileSync(svgPath);

  // Generate PNG
  await sharp(svgBuffer)
    .resize(1200, 630)
    .png()
    .toFile(join(publicDir, 'og-image.png'));
  console.log('Created: og-image.png');

  // Generate JPG
  await sharp(svgBuffer)
    .resize(1200, 630)
    .jpeg({ quality: 90 })
    .toFile(join(publicDir, 'og-image.jpg'));
  console.log('Created: og-image.jpg');

  // Generate favicon PNG (32x32)
  const faviconSvg = readFileSync(join(publicDir, 'favicon.svg'));
  await sharp(faviconSvg)
    .resize(32, 32)
    .png()
    .toFile(join(publicDir, 'favicon-32x32.png'));
  console.log('Created: favicon-32x32.png');

  // Generate favicon PNG (16x16)
  await sharp(faviconSvg)
    .resize(16, 16)
    .png()
    .toFile(join(publicDir, 'favicon-16x16.png'));
  console.log('Created: favicon-16x16.png');

  // Generate Apple Touch Icon (180x180)
  await sharp(faviconSvg)
    .resize(180, 180)
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'));
  console.log('Created: apple-touch-icon.png');

  // Generate PWA icons
  const pwaSizes = [192, 512];
  for (const size of pwaSizes) {
    await sharp(faviconSvg)
      .resize(size, size)
      .png()
      .toFile(join(publicDir, `icon-${size}x${size}.png`));
    console.log(`Created: icon-${size}x${size}.png`);
  }

  console.log('\nAll images generated successfully!');
}

generateOgImages().catch(console.error);
