'use strict';
var randomBool = require('random-boolean');

module.exports = function () {
	return randomBool() ? 1 : 0;
};
