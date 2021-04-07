const path = require('path');
const here = `${path.parse(__dirname).base}${path.sep}`;
module.exports = [
    `${here}00-landingpage`,
    `${here}01-michelson`,
    `${here}02-ligo`,
];