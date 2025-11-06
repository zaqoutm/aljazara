const fs = require('node:fs');

const content = { version: Date.now() };

fs.writeFile('public/aljazara-build-version.json', JSON.stringify(content), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('==========> New build version: ', content.version);
  }
});
