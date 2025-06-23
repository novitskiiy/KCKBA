'use strict';
const fs = require('fs');
const packageJSON = require('../package.json');
const upath = require('upath');
const sh = require('shelljs');

module.exports = function renderScripts() {

    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/js');
    const destPath = upath.resolve(upath.dirname(__filename), '../docs/.');
    
    sh.cp('-R', sourcePath, destPath)

    const sourcePathScriptsJS = upath.resolve(upath.dirname(__filename), '../src/js/scripts.js');
    const destPathScriptsJS = upath.resolve(upath.dirname(__filename), '../docs/js/scripts.js');
    
    const copyright = `/*!
 * KCKBA v${packageJSON.version} (${packageJSON.homepage})
 * Copyright 2024 Bogdan Veremienko
 */\n`;
    const scriptsJS = fs.readFileSync(sourcePathScriptsJS);
    
    fs.writeFileSync(destPathScriptsJS, copyright + scriptsJS);
};