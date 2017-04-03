/**
 * MIT Copyright (c) Yashprit 2017
 *
 * JAL a data structure library
 *
 * https://github.com/yashprit
 * http://yashprit.com/
 *
 * Version: 0.0.1
 *
 * Source Code https://github.com/yashprit/jal
 *
 * The MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.


 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.JAL = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
  SingleLinkedList: require("./adt/SingleLinkedList"),
  Stack: require("./adt/Stack"),
  CircularLinkedList: require("./adt/CircularLinkedList"),
  BinarySearchTree: require("./adt/BinaryTree")
}

},{"./adt/BinaryTree":2,"./adt/CircularLinkedList":3,"./adt/SingleLinkedList":4,"./adt/Stack":5}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
/**
 * Circular Linked List
 *
 */

/**
 * @constructor
 */
function Node(data) {
  this._data = data;
  this._next = null;
};

/**
 * @constructor
 *
 */
function CircularLinkedList() {
  this._head = null;
  this._current = null;
  this._length = 0;
};

/**
 * Utility method to create circular linkedlist
 *
 * .createCircular()
 *
 * @return {void}
 *
 */
CircularLinkedList.prototype.add = function createCircular(data) {
  var node = new Node(data);
  if (!this._head) {
    this._head = this._current = node;
    node._next = this._head;
  } else {
    this._current.next = node;
    this._current = node;
    node._next = this._head;
  }
}

module.exports = CircularLinkedList;

},{}],4:[function(require,module,exports){
'use strict';
// Problems http://cslibrary.stanford.edu/105/
// http://www.geeksforgeeks.org/nth-node-from-the-end-of-a-linked-list/

/**
 * @constructor
 */
function Node(data) {
  this._data = data;
  this._next = null;
};

/**
 * @constructor
 *
 */
function SingleLinkedList() {
  this._head = null;
  this._current = null;
  this._length = 0;
};

/**
 * Overloaded Method
 *
 * insert node at first of linkedlist, this is overloaded version
 * if no arguments passed than it will return Node otherwise set Node
 *
 * .first() get refernce of first value from linkedlist
 * .first(data) set node at first in linkedlist
 *
 * @param {String|Number|undefined} data is either String or Number
 *
 * @return {Node} in case of getter otherwise undefined for case of setter
 *
 */
SingleLinkedList.prototype.first = function first(data) {
  if (data) {
    var node = new Node(data);
    if (!this._head) {
      this._head = this._current = node;
    } else {
      node._next = this._head;
      this._head = node;
    }
    this._length++;
  } else {
    return this._getNth(0);
  }
};

/**
 * Overloaded Method
 *
 * insert node at last of linkedlist
 * no arguments passed than it will return Node otherwise set Node
 *
 * .last(data) set node at last in linkedlist
 * .last() get refernce of last value from linkedlist
 *
 * @param {String|Number|undefined} data either String or Number
 *
 * @return {Node} in case of getter otherwise undefined for case of setter
 */
SingleLinkedList.prototype.last = function last(data) {
  if (data) {
    var node = new Node(data);
    if (!this._head) {
      this._head = this._current = node;
    } else {
      this._current._next = node;
      this._current = node;
    }
    this._length++;
  } else {
    return this._getNth(this._length - 1);
  }
};

/**
 * @alias last
 */
SingleLinkedList.prototype.append = function append(data) {
  var args = Array.prototype.slice.call(arguments, 0);
  this.last.apply(this, args);
};

/**
 * @alias last
 */
SingleLinkedList.prototype.push = function push() {
  var args = Array.prototype.slice.call(arguments, 0);
  this.last.apply(this, args);
};

/**
 * add node after specific index
 *
 * .after(index, data)
 *
 * @param {String|Number} data value to be inserted
 * @param {Number} index inserting
 */
SingleLinkedList.prototype.after = function after(index, data) {
  if (index < 0) {
    throw new Error("invalid index");
  }

  if (this.size() < index) {
    throw new Error("index should be less than count");
  }

  var currentIndex = 0;
  var link = this._head;
  while (link) {
    if (currentIndex === index) {
      var node = new Node(data);
      var next = link._next;
      link._next = node;
      node._next = next;
      this._length++;
      return;
    } else {
      link = link._next;
      currentIndex++;
    }
  }
}

/**
 * add node before specific index
 *
 * .before(index, data)
 *
 * @param {Number} index add elemnet before this index
 * @param {String|Number} value of node
 */
SingleLinkedList.prototype.before = function before(index, data) {
  if (index < 0) {
    throw new Error("invalid index");
  }

  if (this.size() < index) {
    throw new Error("index should be less than count");
  }

  var currentIndex = 0;
  var link = this._head;
  while (link) {
    if (currentIndex === (index - 1)) {
      var node = new Node(data);
      var next = link._next;
      link._next = node;
      node._next = next;
      this._length++;
      return;
    } else {
      link = link._next;
      currentIndex++;
    }
  }
}

/**
 * Get Node at particular index
 *
 * .at(index)
 *
 * @param {Number} index of node
 *
 * @returns {Node} return node at given index
 *
 */
SingleLinkedList.prototype.at = function at(index) {
  return this._getNth(index);
}

/**
 * remove last Node from linkedlist
 *
 * .pop()
 *
 * @returns {Node} last Node from SingleLinkedList
 *
 */
SingleLinkedList.prototype.pop = function pop() {
  if (this.size() === 0) {
    throw new Error("linkedlist size is zero");
  }
  var first = this._head;
  var index = 0;
  while (first) {
    if (first._next._next == null) {
      var element = first._next;
      first._next = null;
      this._length--;
      return element;
    } else {
      first = first._next;
    }
  }
}

/**
 * Remove node from given Index
 *
 * .removeAt(index)
 *
 * @param {Number} index of Node that need to be removed
 *
 * @returns void
 *
 */
SingleLinkedList.prototype.removeAt = function removeAt(index) {
  if (index < 0 || index > this.size()) {
    throw new Error("index is not bound in linked list");
  }

  var iterator = this._head;
  var currentIndex = 0;
  while (iterator) {
    if (currentIndex === index) {
      this._head = iterator._next;
      iterator._next = null;
      this._length--;
      return iterator;
    } else {
      iterator = iterator._next;
      currentIndex++;
    }
  }
}

/**
 *
 * Print SingleLinkedList
 *
 * .print()
 *
 * @return {String} Array like representation
 *
 */
SingleLinkedList.prototype.print = function print() {
  var arr = []
  var first = this._head;
  while (first) {
    arr.push(first._data);
    first = first._next;
  }
  return "[" + arr.join(",") + "]";
}

/**
 *
 * overinding toString method it also alias to #print()
 *
 * .toString()
 *
 * @return {String} Array like representation
 *
 */
SingleLinkedList.prototype.toString = function toString() {
  return this.print();
}

/**
 * Get size of linkedList
 *
 * .size()
 *
 * @return {Number}
 */
SingleLinkedList.prototype.size = function size() {
  return this._length;
}

/**
 * internal method get particular index node from linkedList
 *
 * @private
 *
 * @param {Number} index of node
 *
 * @returns {Node} it return node
 *
 */
SingleLinkedList.prototype._getNth = function(index) {
  var currentIndex = 0;
  var first = this._head;
  while (first) {
    if (currentIndex === index) {
      return first;
    }
    first = first._next;
    currentIndex++;
  }
}

module.exports = SingleLinkedList;

},{}],5:[function(require,module,exports){
'use strict';
/**
 * MAX_SIZE_ALLOWED maximum size allowed of stack
 * it is 2^32 - 1 accoding to http://stackoverflow.com/questions/6154989/maximum-size-of-an-array-in-javascript
 * @type {Number}
 */
var MAX_SIZE_ALLOWED = Math.pow(2,32) - 1;
/**
 * MINIMUM_TOP
 * @type {Number}
 */
var MINIMUM_TOP = -1;
/**
 * @constructor
 */
function Stack(size) {
  this._stack = [];
  this._top = MINIMUM_TOP;
  this._capacity = (size && size <= MAX_SIZE_ALLOWED) ? size : MAX_SIZE_ALLOWED;
}

/**
* push element to stack
* and increment stack top
*
* .push(item)
*
* @param {String|Number} item
* @throws {Error} If [stack is full]
*/
Stack.prototype.push = function push(item) {
  if(this.isFull()) {
    throw new Error("Stack overflow");
  }
  this._top++;
  this._stack[this._top] = item;
};

/**
 * pop element from stack
 * and decrement stack top, returns poped element
 *
 * .pop()
 *
 * @return {String|Number} item that was on top of stack
 */
Stack.prototype.pop = function pop() {
  var item;
  if(this.isEmpty()) {
    throw new Error("Stack underflow");
  }
  item = this._stack[this._top];
  delete this._stack[this._top];
  this._stack.length = this._top;
  this._top--;

  return item;
};

/**
* returns top element on stack
*
* .peek()
*
* @return {String|Number} item
*/
Stack.prototype.peek =  function peek() {
  return this.isEmpty() ? null : this._stack[this._top];
};


/**
* returns if stack is empty
*
*.isEmpty()
*
*@return {boolean} flag
*/
Stack.prototype.isEmpty = function isEmpty() {
  return (this._top <= MINIMUM_TOP);
};

/**
 * isFull checks if stack is full
 * @return {Boolean} flag
 */
Stack.prototype.isFull = function isFull() {
  return (this._top + 1 >= this._capacity);
}

module.exports = Stack;

},{}]},{},[1])(1)
});