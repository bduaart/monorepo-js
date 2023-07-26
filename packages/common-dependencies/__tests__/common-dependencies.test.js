'use strict';

const commonDependencies = require('..');
const assert = require('assert').strict;

assert.strictEqual(commonDependencies(), 'Hello from commonDependencies');
console.info('commonDependencies tests passed');
