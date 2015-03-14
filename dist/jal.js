/**
 * MIT (c) Yashprit 2015
 *
 * JAL a data structure library
 *
 * https://github.com/yashprit
 * http://yashprit.github.io/
 *
 * Version: 0.0.0-alpha
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
  Stack: require("./adt/Stack")
}


},{"./adt/SingleLinkedList":2,"./adt/Stack":3}],2:[function(require,module,exports){
'use strict';
// Problems http://cslibrary.stanford.edu/105/
// http://www.geeksforgeeks.org/nth-node-from-the-end-of-a-linked-list/

/**
 * @constructor
 */

function Node(data, next) {
  this._data = data;
  this._next = null;
};

/**
 * @constructor
 *
 */

function LinkedList() {
  this._head = null;
  this._current = null;
  this._length = 0;
};

/**
 * internal method get particular index node from linkedList
 *
 * @private
 *
 * @param {Number} index of node
 *
 * @returns it return node
 * @type Node
 */
LinkedList.prototype._getNth = function(index) {
  var currentIndex = 0;
  var first = this._head;
  while (first) {
    if (currentIndex === index) {
      return first;
    }
    first = first.next;
    currentIndex++;
  }
}

/**
 * add node to last in linkedlist, this is overloaded version
 *
 * .first() get refernce of first value from linkedlist
 * .first(data) set node at first in linkedlist
 *
 * @private
 *
 * @param {String|Number|undefined} data part of Node
 *
 * @return {Node} in case if its not set
 */
LinkedList.prototype.first = function last(data) {
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
 * insert node at first of linkedlist, this is overloaded version
 *
 * .last() get refernce of first value from linkedlist
 * .last(data) set node at last
 *
 * @param {String|Number|undefined} data either String or Number
 *
 * @return {Node} in case if its not set
 */
LinkedList.prototype.last = function first(data) {
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
 * Alias for last
 */
LinkedList.prototype.append = function append(data) {
  this.last(argument);
};

/**
 * Alias for last
 */
LinkedList.prototype.push = function push() {
  this.last(argument);
};

/**
 * add node after specific index
 *
 * .after(index, data)
 *
 * @param {String|Number} data, value to be inserted
 * @param {Number} index, inserting
 */
LinkedList.prototype.after = function after(index, data) {
  if (index < 0) {
    throw new Error("invalid index");
  }

  if (this.count() < index) {
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
 * @param {Number} index, add elemnet before this index
 * @param {String|Number}, value of node
 */
LinkedList.prototype.before = function before(index, data) {
  if (index < 0) {
    throw new Error("invalid index");
  }

  if (this.count() < index) {
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
 * @returns return node at given index
 * @type Node
 */
LinkedList.prototype.at = function at(index) {
  return this._getNth(index);
}

/**
 * remove last Node from linkedlist
 *
 * .pop()
 *
 * @returns last Node from LinkedList
 * @type Node
 */
LinkedList.prototype.pop = function pop() {
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
 * @type undefined
 */
LinkedList.prototype.removeAt = function removeAt(index) {

}

/**
 * internal method for finding nth element of array from end
 *
 * @private
 *
 * @param  {Number} index specifiy index of linkedlist from end
 *
 * @return {Node}
 */
LinkedList.prototype._nthFromEnd = function _nthFromEnd(index) {

}

/**
 * Print LinkedList
 *
 * .print()
 *
 * @returns all linkedlist
 * @type String
 */
LinkedList.prototype.print = function print() {

}

/**
 * Get size of linkedList
 *
 * .size()
 *
 * @return {Number}
 */
LinkedList.prototype.count = function size() {
  return this._length;
}

/**
 * Utility method to create circular linkedlist
 *
 */
LinkedList.prototype.createCircular = function createCircular() {

}

/**
 * Check for circular linkedlist
 *
 * .isCircular()
 *
 * @returns this linkedlist is circular
 * @type Boolean
 */
LinkedList.prototype.isCircular = function isCircular() {

}

module.exports = LinkedList;


},{}],3:[function(require,module,exports){
'use strict';

/**
 * constructor of the stack
 */
function Stack() {
  this._stack = [];
  this._top = -1;
}

Stack.prototype = {

  /**
   * push element to stack
   * and increment stack top
   *
   * .push(item)
   *
   * @param (String) item
   */
  push: function push(item) {
    this._top++;
    this._stack[this._top] = item;
  },

  /**
   * pop element from stack
   * and decrement stack top, returns poped element
   *
   * .pop(item)
   *
   * @return (string) item
   */
  pop: function pop() {
    this._top--;
    return this._stack.pop()
  },

  /**
   * returns top element on stack
   *
   * .top()
   *
   * @return (string) item
   */
  getTop: function top() {
    return this._top !== -1 ? this._stack[this._top] : null;
  }
}

module.exports = Stack;


},{}]},{},[1])(1)
});