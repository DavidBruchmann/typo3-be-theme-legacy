const fs = require('fs');
const path = require('path');

// 1. Get target from CLI argument (from the bash script) or default
const targetDir = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.resolve(__dirname, '../build');

const baseUrl = process.env.BASE_URL || '/';

console.log(`📂 Target Directory: ${targetDir}`);
console.log(`🚿 Base URL to strip: ${baseUrl}`);

function walk(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath);
    } else if (path.extname(filePath) === '.html') {
      processFile(filePath);
    }
  });
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const dirName = path.dirname(filePath);

  // Calculate depth relative to our targetDir root
  let relativePrefix = path.relative(dirName, targetDir);
  if (relativePrefix === "") relativePrefix = ".";

  console.log(`📄 Processing: ${path.relative(targetDir, filePath)} (Depth: ${relativePrefix})`);

  const fixedContent = content.replace(/(href|src)="([^"]+)"/g, (match, attr, val) => {
    if (val.startsWith('http') || val.startsWith('//') || val.startsWith('#') || val.startsWith('mailto:')) {
      return match;
    }

    let newVal = val;

    // Remove BaseUrl
    if (newVal.startsWith(baseUrl)) {
      newVal = newVal.substring(baseUrl.length);
    }
    if (newVal.startsWith('/')) {
      newVal = newVal.substring(1);
    }

    // Add .html suffix to pages
    const isAsset = /\.(css|js|png|jpg|jpeg|svg|ico|webmanifest|json|zip|txt)$/i.test(newVal);
    if (!isAsset && newVal.length > 0 && !newVal.endsWith('.html')) {
      newVal = newVal.replace(/\/$/, '') + '.html';
    }

    if (newVal === '' || newVal === '/') newVal = 'index.html';

    return `${attr}="${relativePrefix}/${newVal}"`;
  });

  // CRITICAL: Write it back to the SAME filePath
  fs.writeFileSync(filePath, fixedContent, 'utf8');
}

if (fs.existsSync(targetDir)) {
  walk(targetDir);
  console.log('✅ All files updated on disk.');
} else {
  console.error(`❌ targetDir not found: ${targetDir}`);
}


/*
const fs = require('fs');
const path = require('path');

const targetPath = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(__dirname, '../build');
console.log(`🚿 Fixing paths in: ${targetPath}`);


// Manually load .env if process.env.BASE_URL is missing
if (!process.env.BASE_URL) {
  const envPath = path.resolve(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    const envFile = fs.readFileSync(envPath, 'utf8');
    envFile.split('\n').forEach(line => {
      const [key, value] = line.split('=');
      if (key && value) {
        process.env[key.trim()] = value.replace(/["']/g, '').trim();
      }
    });
  }
}

const buildDir = path.resolve(__dirname, '../build');

// Ensure baseUrl matches what's in your .env (e.g., "/typo3-be-theme-legacy/")
const baseUrl = process.env.BASE_URL; // || '/';

function walk(targetPath, callback) {
    fs.readdirSync(targetPath).forEach(f => {
        let dirPath = path.join(targetPath, f);
        fs.statSync(dirPath).isDirectory() ? walk(dirPath, callback) : callback(dirPath);
    });
}

console.log(`🚿 Fixing paths for offline use (Base: ${baseUrl})...`);

walk(buildDir, (filePath) => {
    if (path.extname(filePath) !== '.html') return;

    let content = fs.readFileSync(filePath, 'utf8');
    const dirName = path.dirname(filePath);
    // Calculate the exact relative prefix (e.g., "../" or ".")
    let relativePrefix = path.relative(dirName, buildDir);
    if (relativePrefix === "") {
        // relativePrefix = ".";
    }

    // Regex to find all href and src, ignoring external links
    const fixedContent = content.replace(/(href|src)="([^"]+)"/g, (match, attr, val) => {

        console.log({'match': match, 'attr': attr, 'val': val});
        // Skip external, protocol-relative, or hash links
        if (val.startsWith('http')
            || val.startsWith('//')
            || val.startsWith('#')
            || val.startsWith('mailto:')
        ) {
            return match;
        }

        let newVal = val;
        let rulesApplied = [];

        // 1. Strip the BASE_URL from the path (e.g., /typo3-be-theme-legacy/ -> /)
        if (newVal.startsWith(baseUrl)) {
            newVal = newVal.substring(baseUrl.length);
            rulesApplied['1_baseUrl'] = newVal + ' [' + baseUrl.length + ']';
        }

        // 2. Remove any leading slash
        if (newVal.startsWith('/')) {
            newVal = newVal.substring(1);
            rulesApplied['2_startsWithSlash'] = newVal;
        }

        // 3. Append .html if it's a page and not an asset
        const isAsset = /\.(css|js|png|jpg|jpeg|svg|ico|webmanifest|json|zip|txt)$/i.test(newVal);
        if (!isAsset && newVal.length > 0 && !newVal.endsWith('.html')) {
            newVal = newVal.replace(/\/$/, '') + '.html';
            rulesApplied['3_isAssetFile'] = newVal;
        }

        // 4. Handle homepage
        if (newVal === '' || newVal === '/') {
            newVal = 'index.html';
            rulesApplied['4_isEmptyOrSlash'] = newVal;
        }

        let result = `${attr}="${relativePrefix}/${newVal}"`;

        rulesApplied['5_result'] = result;

        console.log({'match': match, 'attr': attr, 'val': val, 'rulesApplied': rulesApplied});
        / *
        console.log({
            'GITHUB_REPO':process.env.GITHUB_REPO,
            'SITE_TITLE':process.env.SITE_TITLE,
            'BASE_URL':process.env.BASE_URL,
        });
        * /
        return result;
    });

    fs.writeFileSync(filePath, fixedContent);
});
console.log('✅ Success: Relative paths calculated and BASE_URL stripped.');
*/
