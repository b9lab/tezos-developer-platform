const path = require('path');
const here = `${path.parse(__dirname).base}${path.sep}`;
module.exports = [
  `${here}00-landingpage`,
  `${here}01-introduction-1`,
  `${here}02-introduction-2`,
  `${here}03-getting-into-tezos-1`,
  `${here}04-getting-into-tezos-2`,
  `${here}05-quiz`
];
