'use strict';
function bstNode() {
	this.left = '';
	this.right = '';
	this.nodeValue = '';
	
	this.setNodeValue = function setNodeValue(newValue) {
		this.nodeValue = newValue;
	};
};
module.exports = bstNode;