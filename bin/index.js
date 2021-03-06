#!/usr/bin/env node
'use strict';

const { Command } = require('commander');
const ora = require('ora');
const { extractThumbnail } = require('../index');

const pkg = require('../package.json');

const program = new Command(pkg.name);

program
  .version(pkg.version)
  .arguments('<xds...>')
  .action(extract)
  .parse(process.argv);

async function extract(xds) {
  const spinner = ora('Extract thumbnail from Adobe XD files').start();
  try {
    for (let xdFile of xds) {
      await extractThumbnail(xdFile);
    }
  } finally {
    spinner.stop();
  }
}
