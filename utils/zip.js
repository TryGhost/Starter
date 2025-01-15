/*
Use this script to create a zip file of your theme. Add or remove files you want to include.
*/
const fs = require('fs');
const AdmZip = require('adm-zip');

const zip = new AdmZip();

// Folders
zip.addLocalFolder('./assets', 'assets');
zip.addLocalFolder('./partials', 'partials');

// Files
fs.readdirSync('./')
  .filter((file) => file.endsWith('.hbs'))
  .forEach((file) => zip.addLocalFile(`./${file}`));

zip.addLocalFile('./package.json');
zip.addLocalFile('./README.md');

zip.writeZip('./dist/theme.zip');
