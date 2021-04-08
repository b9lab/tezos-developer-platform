const path = require('path');
const here = `${path.parse(__dirname).base}${path.sep}`;
module.exports = [
	`${here}00-landingpage`,
  `${here}01-architecture`,
  `${here}02-testnet-1`,
  `${here}03-testnet-2`,
  `${here}04-testnet-3`,
  `${here}05-quiz`
];
