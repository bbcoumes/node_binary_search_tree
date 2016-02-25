'use strict';

const test = require('tape').test;
const bst = require('../bst_src/bst');

test('Testing bst', (assert) => {
	let isTreeEmpty = bst.checkIfEmpty();
	assert.equal(isTreeEmpty, true, 
		'Given an empty tree, checkIfEmpty should return true');
	assert.end();
});