#!/usr/bin/env node

const execa = require('execa');
const binPath = require.resolve('@angular/cli/bin/ng');

execa(
  binPath,
  ['new', '-c', '@ng-zorro/schematics'].concat(process.argv.slice(2)),
  { stdio: 'inherit' },
);
