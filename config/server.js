/* eslint-disable no-process-env */

// localhost:8081 is the sewing-kit default for dev server
const ip = process.env.IP || 'localhost';
const port = process.env.PORT || '8081';

// localhost:8080 is the sewing-kit default build server
const cdnUrl = process.env.CDN_URL || 'http://localhost:8080/';

// where vendor.js is build to
const vendorBundleUrl = `${cdnUrl}webpack/assets/dll/vendor.js`;

module.exports = {
  ip,
  port,
  cdnUrl,
  vendorBundleUrl,
};
