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
		newNode.nodeValue = newValue;

		if(bst.checkIfEmpty()){
			bst.tree.push(newNode);
		} else {
			let currentNode = bst.tree[rootValue];
			while(currentNode !==undefined) {
				//go right
				if (currentNode.nodeValue < newValue) {
					if(currentNode.right !=='') {
						bst.insertNode(newValue, currentNode.right);
					} else {
						bst.tree.push(newNode);
            currentNode.right = bst.tree.length-1;
						bst.tree[treeRoot] = currentNode;
					}
				}
				//go left
				else if(currentNode.nodeValue > newValue) {

				}
				break;
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
coolBst.insertNode(2);
coolBst.insertNode(3);
console.log(coolBst.tree);
console.log(coolBst.tree[4]);
module.exports = bst;