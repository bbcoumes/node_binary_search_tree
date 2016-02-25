'use strict';

const bstNode = require('./bst_node');

const bst = {
	
	tree: [],

	/**
	 * This is a function to create and insert a new node into tree
	 * @param  {newValue} value that will be represented by new node
	 * @return none
	 */
	insertNode(newValue, treeRoot) {
		let rootValue = treeRoot || 0; 
		if(bst.checkIfEmpty){
			let newNode = Object.create(bstNode);
			newNode.setNodeValue(newValue);
			bst.tree.push(newNode);
		} else {
			let newNode = Object.create(bstNode);
			newNode.setNodeValue(newValue);
			let currentNode = tree[rootValue];
			while(currentNode) {
				//go right
				if (currentNode.nodeValue < newValue) {
					if(currentNode.right) {
						bst.insertNode(newValue, currentNode.right);
					} else {
						bst.tree.push(newNode);
						current.right = bst.tree.length -1;
					}
				}
				//go left
				else if(currentNode > newValue) {

				}
			}

		}
	},

	checkIfEmpty() {
		if (bst.tree.length === 0){
			return true;
		}
		return false;
	},

	searchTree() {
		if(bst.checkIfEmpty){
			return false;
		}
	},
	removeNode() {

	},
};

let bstTree = Object.create(bst);
bstTree.insertNode(5);
console.log(bstTree.tree);
bstTree.insertNode(6);
console.log(bstTree.tree);
module.exports = bst;