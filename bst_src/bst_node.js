'use strict';
const bstNode = {
	left : null,
	right : null,
	nodeValue : '',
	setNodeValue(newValue) {
		bstNode.nodeValue = newValue;
	},
};
module.exports = bstNode;