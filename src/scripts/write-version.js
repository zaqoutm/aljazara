const fs = require('node:fs');

const content = { version: Date.now() };
const outFolder = process.env.NODE_ENV == 'production' ? 'out' : 'public';

fs.writeFile(`${outFolder}/aljazara-build-version.json`, JSON.stringify(content), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`==========> /${outFolder} New build version: `, content.version);
  }
});
