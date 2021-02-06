'use strict';
const StreamZip = require('node-stream-zip');
const path = require('path');
const DEFAULT_XD_THUMBNAIL_NAME = 'thumbnail.png';

exports.extractThumbnail = async ({ file, filename, filepath }) => {
  if (!file) {
    console.error('Missing target XD file');
    return;
  }
  const targetPath = filepath ? path.resolve(filepath) : path.dirname(file); // Default to input file folder
  const targetFileName = filename ? filename : `${path.basename(file, '.xd')}.png`;
  const XDZip = new StreamZip.async({ file });
  await XDZip.extract(DEFAULT_XD_THUMBNAIL_NAME, path.resolve(targetPath, targetFileName));
  await XDZip.close();
};
