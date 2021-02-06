const test = require('ava');
const fs = require('fs');
const thumbnailExtractor = require('..');

fs.mkdirSync('./test/fixtures/target');

test('Default thumbnail file name should be the same as the basename of XD file', async t => {
  const baseName = 'Cards-v1.0.0';
  await thumbnailExtractor.extractThumbnail({ file: `./test/fixtures/${baseName}.xd` });
  t.true(fs.existsSync(`./test/fixtures/${baseName}.png`));
});

test('Customized thumbnail filename', async t => {
  const baseName = 'Spectrum_Demo_2021-01-26-Hello_BackstopJS';
  await thumbnailExtractor.extractThumbnail({ file: `./test/fixtures/${baseName}.xd`, filename: 'test.png' });
  t.true(fs.existsSync(`./test/fixtures/test.png`));
});

test('Customized thumbnail filename with none default output path', async t => {
  const baseName = 'Cards-v1.0.0';
  await thumbnailExtractor.extractThumbnail({ file: `./test/fixtures/${baseName}.xd`, filename: 'test.png', filepath: './test/fixtures/target' });
  t.true(fs.existsSync(`./test/fixtures/test.png`));
});

test('Extract thumbnail to a different folder with default name', async t => {
  const baseName = 'Spectrum_Demo_2021-01-26-Hello_BackstopJS';
  await thumbnailExtractor.extractThumbnail({ file: `./test/fixtures/${baseName}.xd`, filepath: './test/fixtures/target' });
  t.true(fs.existsSync(`./test/fixtures/target/${baseName}.png`));
});

test.after.always(t => {
  fs.readdirSync('./test/fixtures')
    .filter(f => /[.]png$/.test(f))
    .map(f => fs.unlinkSync(`./test/fixtures/${f}`));

  fs.readdirSync('./test/fixtures/target')
    .filter(f => /[.]png$/.test(f))
    .map(f => fs.unlinkSync(`./test/fixtures/target/${f}`));

  fs.rmdirSync('./test/fixtures/target');
});
