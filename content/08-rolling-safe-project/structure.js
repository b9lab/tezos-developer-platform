const path = require('path');
const here = `${path.parse(__dirname).base}${path.sep}`;
module.exports = [
  `${here}00-landingpage`,
  `${here}01-intro-origins-of-rolling-safe`,
  `${here}02-what-is-a-rolling-safe`,
  `${here}02-platform-specification`,
  `${here}04-smart-contract-implementation-1`,
  `${here}05-smart-contract-implementation-2`,
  `${here}06-platform-stack`,
  `${here}07-testing`,
  `${here}08-full-end-to-end-test`,
];