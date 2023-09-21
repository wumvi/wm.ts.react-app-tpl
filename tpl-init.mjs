import fs from 'fs';
import path from 'path';

const PACKAGE_FILE = 'package.json';
const packageRaw = fs.readFileSync(PACKAGE_FILE);
const packageJson = JSON.parse(packageRaw);
const currentDirName = path.basename(process.cwd());
packageJson.name = '@wumvi/' + currentDirName;
packageJson.i18tsName = currentDirName.replaceAll('.', '-');
let content = JSON.stringify(packageJson, null, 2);
fs.writeFile(PACKAGE_FILE, content, err => {
    if (err) {
        console.error(err);
    }
});

const GIT_IGNORE_FILE = '.gitignore';
const gitIgnore = fs.readFileSync(GIT_IGNORE_FILE);
content = gitIgnore.toString().replace('package-lock.json', '');

fs.writeFile(PACKAGE_FILE, content, err => {
    if (err) {
        console.error(err);
    }
});