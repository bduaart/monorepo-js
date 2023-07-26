'use strict';

const randomDate = require('..');
const assert = require('assert').strict;

assert.strictEqual(randomDate(), 'Hello from randomDate');
console.info('randomDate tests passed');
