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

		if(bst.checkIfEmpty()){
			this.tree.push(bst.createNode(newValue));
		} else {
			let currentNode = this.tree[rootValue];
			if(currentNode !==undefined) {
				let comparedValue = this.compareValues(currentNode.nodeValue, newValue);
				//go right
				if (comparedValue > 0) {
					if(currentNode.right !==null) {
						this.insertNode(newValue, currentNode.right);
					} else {
						this.tree.push(this.createNode(newValue));
            currentNode.right = this.tree.length-1;
						this.tree[treeRoot] = currentNode;
					}
				}
				//go left
				else if (comparedValue < 1){
					if(currentNode.left !==null){
						this.insertNode(newValue, currentNode.left);
					} else {
						this.tree.push(this.createNode(newValue));
            currentNode.left = this.tree.length-1;
						this.tree[treeRoot] = currentNode;
					}
				}
			}
		}
	},

	checkIfEmpty() {
		if (this.tree.length === 0){
			return true;
		}
		return false;
	},

	searchTree(searchValue) {
		if(this.checkIfEmpty()){
			return false;
		}
		let currentIndex = 0;
		let currentNode = this.tree[currentIndex];
		while (currentNode !==undefined){
			let cmp = this.compareValues(currentNode.nodeValue, searchValue);
			if( cmp > 0){
				currentIndex = currentNode.right;
			} else if(cmp < 0){
				currentIndex = currentNode.left;
			} else {
				return currentIndex;
			}
			currentNode = this.tree[currentIndex];
		}
		return false;
	},

	removeNode() {

	},

	compareValues (a,b){
		if (a===b){
			return 0;
		}
		else if(a < b){
			return 1;
		}
		else{
			return -1;
		}
	},

	createNode(val){
		let newNode = new bstNode();
		newNode.nodeValue = val;
		return newNode;
	}
};
module.exports = bst;