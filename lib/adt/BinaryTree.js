'use strict'


function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}


/**
 * @constructor
 */
function BinaryTree() {

}

/**
 * Show size of current tree
 * @return {Number} return size of tree
 */
BinaryTree.prototype.size = function() {}

/**
 * Tell tree is empty or not
 * @return {Boolean} tree is empty ot not
 */
BinaryTree.prototype.isEmpty = function() {}

/**
 * return root node of tree
 * @param {Object} node node
 * @return {Object} root node position
 */
BinaryTree.prototype.root = function(node) {}

/**
 * return current node is root or not
 * @return {Boolean} return node is root or not
 */
BinaryTree.prototype.isRoot = function() {}

/**
 * return parent of passsed node
 * @param {Object} position position of node
 * @return {Object} return parent of node
 */
BinaryTree.prototype.parent = function(position) {}

/**
 * return children of node
 * @param {Object} position position of node
 * @return {Object} return Iterator or list of children
 */
BinaryTree.prototype.children = function(position) {}


/**
 * return node is internal or not
 * @param  {Object}  position node is internal or not
 * @return {Boolean}          return node is internal or not
 */
BinaryTree.prototype.isInternal = function(position) {}

/**
 * return node is external or not
 * @param  {Object}  node node to check
 * @return {Boolean}      return true or false based on condition matched
 */
BinaryTree.prototype.isExternal = function(node) {}

/**
 * is node passed is root node or not
 * @param  {Object}  node node to check
 * @return {Boolean}      return true/false based on condition
 */
BinaryTree.prototype.isRoot = function(node) {}

/**
 * get all tree element starting from root
 * @return {Object} Iterator
 */
BinaryTree.prototype.elements = function() {}

/**
 * get all tree element starting from root
 * @return {Object} Iterator
 */
BinaryTree.prototype.positions = function() {}

/**
 * [replace description]
 * @param  {Object} positionTo   replace to
 * @param  {Object} positionFrom replace with
 * @return {void}
 */
BinaryTree.prototype.replace = function(positionTo, positionFrom) {}

/**
 * Add node to tree
 * @param {Number|String} data     data to be added in tree
 * @param {Number} position add node provided position
 * @return {void}
 */
BinaryTree.prototype.add = function(data, position) {}

/**
 * remove node from tree
 * @param  {Number} position remove node from position
 * @return {Void}
 */
BinaryTree.prototype.remove = function(position) {}
