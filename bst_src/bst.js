'use strict';

const bstNode = require('./bst_node');
const _  = require('lodash');

const bst = {
	
	tree: [],

	/**
	 * This is a function to create and insert a new node into tree
	 * @param  {newValue} value that will be represented by new node
	 * @return none
	 */
	insertNode(newValue, treeRoot) {
		
		let rootValue = treeRoot || 0;

		let newNode = new bstNode();
		newNode.setNodeValue(newValue);

		if(bst.checkIfEmpty){
			bst.tree.push(newNode);
		} else {
			let currentNode = bst.tree[rootValue];
			while(currentNode) {
				//go right
				if (currentNode.getNodeValue < newValue) {
					if(currentNode.getRight()) {
						bst.insertNode(newValue, currentNode.right);
					} else {
						bst.tree.push(newNode);
            currentNode.setRight(bst.tree.length -1);
						bst.tree[treeRoot] = currentNode;
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
let coolBst = Object.create(bst);
coolBst.insertNode(1);
console.log(coolBst.tree);
module.exports = bst;