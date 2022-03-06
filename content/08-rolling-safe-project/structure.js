const path = require('path');
const here = `${path.parse(__dirname).base}${path.sep}`;
module.exports = [
  `${here}00-landingpage`,
  `${here}01-intro-origins-of-rolling-safe`,
  `${here}02-what-is-a-rolling-safe`,
  `${here}03-get-started`,  
  `${here}04-rolling-safe-system-architecture`,
  `${here}05-smart-contract-implementation-1`,
  `${here}06-smart-contract-implementation-2`,
  `${here}07-platform-stack`,
  `${here}08-testing`,
  `${here}09-full-end-to-end-test`,
];