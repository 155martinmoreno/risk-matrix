const fs = require('fs');
const path = require('path');

// Ensure dist directory exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy the HTML file from src to dist
const srcHtml = path.join(__dirname, 'src', 'index.html');
const distHtml = path.join(distDir, 'index.html');

const html = fs.readFileSync(srcHtml, 'utf-8');
fs.writeFileSync(distHtml, html);

console.log('Build complete! Output: dist/index.html');
