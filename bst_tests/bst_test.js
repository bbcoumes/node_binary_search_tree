'use strict';

var test = require('tape').test;
var bst = require('../bst_src/bst');

test('Testing bst', function(assert){
	var isTreeEmpty = bst.checkIfEmpty();
	assert.equal(isTreeEmpty, true, 
		'Given an empty tree, checkIfEmpty should return true');
	assert.end();
});