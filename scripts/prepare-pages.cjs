const fs = require('node:fs');
const path = require('node:path');

// Public asset URLs in both server markup and client bundles need the Pages prefix.
function visit(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) visit(filename);
    else if (/\.(html|js|css|txt|json)$/.test(entry.name)) {
      const original = fs.readFileSync(filename, 'utf8');
      const updated = original.replace(/(?<!creative-yamal)\/(images|brand)\//g, '/creative-yamal/$1/');
      if (updated !== original) fs.writeFileSync(filename, updated);
    }
  }
}
visit(path.resolve('out'));
fs.writeFileSync(path.resolve('out/.nojekyll'), '');
