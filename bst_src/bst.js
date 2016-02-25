'use strict';

const bstNode = require('./bst_node');

const bst = {
	
	tree: '',

	insertNode(newValue) {
		return false;
	},

	checkIfEmpty() {
		if (bst.tree===''){
			return true;
		}
		return false;
	},

	searchTree() {

	},
	removeNode() {

	},
};

module.exports = bst;