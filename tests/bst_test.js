'use strict';

const test = require('tape').test;
const bst = require('../bst_src/bst');

test('Testing bst', (assert) => {
	let testBst = Object.create(bst);
	
	let isTreeEmpty = testBst.checkIfEmpty();	
	assert.equal(isTreeEmpty, true, 
		'Given an empty tree, checkIfEmpty should return true');
	
	testBst.insertNode(1);

	assert.equal(testBst.tree.length !==0, true, 
		'Given an empty tree, insertNode(1) should create a tree with length > 0');

	assert.equal(testBst.tree[0].getNodeValue()===1, true,
		'Given a tree with just the root, its value should be 1');

	testBst.insertNode(2);
	assert.equal(testBst.tree.length===2, true,
		'Given a tree with 2 elements, it should have length 2');
	assert.equal(testBst.tree[0].getRight() ===1, true, 
		'Given a tree with the above 2 nodes, the root should have a right value' +
		'of 1 and it is currently: ' + testBst.tree[0].getRight());

	assert.end();
});