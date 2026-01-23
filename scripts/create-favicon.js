const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '..', 'public', 'logo-source.png');
const publicDir = path.join(__dirname, '..', 'public');
const appDir = path.join(__dirname, '..', 'app');

async function generateFavicons() {
    console.log('Generating favicons from:', inputPath);

    // First, read the source image and get the circular part (crop to square centered on circle)
    const metadata = await sharp(inputPath).metadata();
    console.log('Source image dimensions:', metadata.width, 'x', metadata.height);

    // The circle logo appears centered, so we'll extract the square region
    const size = Math.min(metadata.width, metadata.height);
    const left = Math.floor((metadata.width - size) / 2);
    const top = Math.floor((metadata.height - size) / 2);

    // Create a cropped square version of the logo
    const croppedBuffer = await sharp(inputPath)
        .extract({ left, top, width: size, height: size })
        .toBuffer();

    console.log('Cropped to square:', size, 'x', size);

    const sizes = [
        { name: 'favicon.png', size: 512 },
        { name: 'favicon-16x16.png', size: 16 },
        { name: 'favicon-32x32.png', size: 32 },
        { name: 'favicon-48x48.png', size: 48 },
        { name: 'apple-touch-icon.png', size: 180 },
        { name: 'android-chrome-192x192.png', size: 192 },
        { name: 'android-chrome-512x512.png', size: 512 },
    ];

    for (const { name, size: targetSize } of sizes) {
        const outputPath = path.join(publicDir, name);
        await sharp(croppedBuffer)
            .resize(targetSize, targetSize, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .png()
            .toFile(outputPath);
        console.log(`Created: ${name} (${targetSize}x${targetSize})`);
    }

    // Create app/icon.png for Next.js
    const appIconPath = path.join(appDir, 'icon.png');
    await sharp(croppedBuffer)
        .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .png()
        .toFile(appIconPath);
    console.log('Created: app/icon.png (32x32)');

    console.log('\nAll favicons generated successfully from your exact logo!');
}

generateFavicons().catch(err => {
    console.error('Error generating favicons:', err);
    process.exit(1);
});
