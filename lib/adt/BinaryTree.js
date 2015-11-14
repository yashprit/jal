'use strict'


/**
 * Private Helper method for BinaryTree
 *
 */

var dataHolder = [];

/**
 * @param {BinaryTreeNode}
 * update global array for inorder, using recursive style
 */
var inorderHelper = function(node){
  if(node){
    inorderHelper(node._left);
    dataHolder.push(node._data);
    inorderHelper(node._right);
  }
}

/**
 * @param {BinaryTreeNode}
 * update global array for postorder, using recursive style
 */
var postorderHelper = function(node){
  if(node){
    postorderHelper(node._left);
    postorderHelper(node._right);
    dataHolder.push(node._data);
  }
}

/**
 * @param {BinaryTreeNode}
 * update global array for preorder, using recursive style
 */
var preorderHelper = function(node){
  if(node){
    dataHolder.push(node._data);
    preorderHelper(node._left);
    preorderHelper(node._right);
  }
}



/**
 * @Contructor
 * @param data node value
 */
function BinaryTreeNode(data) {
  this._data = data;
  this._left = null;
  this._right = null;
}

BinaryTreeNode.prototype.getData = function(){
  return this._data;
}


/**
 * @constructor
 */
function BinaryTree() {
  this._root = null;
  this._current = null;
  this._length = 0;
}

BinaryTree.type = {
  INORDER: 'inorder',
  PREORDER: 'preorder',
  POSTORDER: 'postorder'
}

/**
 * Add node to tree
 * @param {Number|String} data     data to be added in tree
 * @param {Number} position add node provided position
 * @return {void}
 */
BinaryTree.prototype.insert = function(data) {
  if(!((typeof data === 'string' && data.length === 1) || typeof data === 'number')){
    throw new Error('value should be char or number');
  }


  if(this._root === null){
    this._root = new BinaryTreeNode(data);
    return;
  }

  var newNode = new BinaryTreeNode(data);
  var currentNode = this._root;

  while(currentNode){
    if(data < currentNode._data){
      if(!currentNode._left){
        currentNode._left = newNode;
        break;
      } else {
         currentNode = currentNode._left;
      }
    } else {
      if(!currentNode._right){
        currentNode._right = newNode;
        break;
      } else {
        currentNode = currentNode._right;
      }
    }
  }
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
BinaryTree.prototype.isEmpty = function() {
  return root === null;
}

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
 * Traverse binary tree in inorder traversal
 * * @return {Array} 
 */
BinaryTree.prototype.inorder = function(){
  dataHolder = [];
  inorderHelper(this._root);
  return dataHolder;
}

/**
 * Traverse binary tree in preorder traversal
 * * @return {Array} 
 */

BinaryTree.prototype.preorder = function(){
  dataHolder = [];
  preorderHelper(this._root);
  return dataHolder;
}

/**
 * Traverse binary tree in postorder traversal
 * * @return {Array} 
 */

BinaryTree.prototype.postorder = function(){
  dataHolder = [];
  postorderHelper(this._root);
  return dataHolder;
}


/**
 * [replace description]
 * @param  {Object} positionTo   replace to
 * @param  {Object} positionFrom replace with
 * @return {void}
 */
BinaryTree.prototype.replace = function(positionTo, positionFrom) {}

BinaryTree.prototype.print = function (type){
  if(type === BinaryTree.position.POSTORDER){
    var data = this.postorder();
  } else   if(type === BinaryTree.position.PREORDER){
    var data = this.preorder();
  } else {
    var data = this.inorder();
  }

  return('[' + data.join(',') + ']');
}

/**
 * remove node from tree
 * @param  {Number} position remove node from position
 * @return {Void}
 */
BinaryTree.prototype.remove = function(position) {}

BinaryTree.node = BinaryTreeNode;

module.exports = BinaryTree;
