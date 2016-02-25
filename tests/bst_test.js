'use strict';

const test = require('tape').test;
const bst = require('../bst_src/bst');

test('Testing bst', (assert) => {
	let isTreeEmpty = bst.checkIfEmpty();
	assert.equal(isTreeEmpty, true, 
		'Given an empty tree, checkIfEmpty should return true');
	let insertNode = bst.insertNode(1);
	assirt.equal(insertNode, true, 
		'Given an empty tree, insertNode(1) should return true');
	assert.end();
});