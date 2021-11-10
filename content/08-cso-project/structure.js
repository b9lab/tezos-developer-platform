const path = require('path');
const here = `${path.parse(__dirname).base}${path.sep}`;
module.exports = [
  `${here}00-landingpage`,
  `${here}01-intro-what-is-a-rolling-safe`,
  `${here}02-smart-contract-implementation-1`,
  `${here}03-smart-contract-implementation-2`,
  `${here}04-platform-specification`,
  `${here}05-platform-stack`,
  `${here}06-platform-connections`,
  `${here}07-testing`,
  `${here}08-full-end-to-end-test`,
];