'use strict';

function bstNode() {
	let left = '';
	let right = '';
	let nodeValue = '';

	this.setNodeValue = function setNodeValue(newValue) {
		nodeValue = newValue;
	};

	this.getNodeValue = function getNodeValue() {
		return nodeValue;
	}

	this.setRight = function setRight(x) {
		right = x;
	}

	this.getRight = function getRight() {
		return right;
	}

	this.setLeft = function setLeft(x) {
		left = x;
	}

	this.getLeft = function getLeft() {
		return left;
	}

};
module.exports = bstNode;