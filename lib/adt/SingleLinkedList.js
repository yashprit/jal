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
function LinkedList() {
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
LinkedList.prototype.first = function first(data) {
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
 * insert node at last of linkedlist, this is overloaded version
 * if no arguments passed than it will return Node otherwise set Node
 *
 * .last() get refernce of last value from linkedlist
 * .last(data) set node at last in linkedlist
 *
 * @param {String|Number|undefined} data either String or Number
 *
 * @return {Node} in case of getter otherwise undefined for case of setter
 *
 */
LinkedList.prototype.last = function last(data) {
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
  this.last(arguments);
};

/**
 * Alias for last
 */
LinkedList.prototype.push = function push() {
  this.last(arguments);
};

/**
 * add node after specific index
 *
 * .after(index, data)
 *
 * @param {String|Number} data value to be inserted
 * @param {Number} index inserting
 */
LinkedList.prototype.after = function after(index, data) {
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
LinkedList.prototype.before = function before(index, data) {
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
LinkedList.prototype.at = function at(index) {
  return this._getNth(index);
}

/**
 * remove last Node from linkedlist
 *
 * .pop()
 *
 * @returns {Node} last Node from LinkedList
 *
 */
LinkedList.prototype.pop = function pop() {
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
LinkedList.prototype.removeAt = function removeAt(index) {

}

/**
 * Print LinkedList
 *
 * .print()
 *
 * @returns all linkedlist
 *
 */
LinkedList.prototype.print = function print() {

}

/**
 * overinding toString method it also alias to #print()
 *
 * .toString()
 *
 * @return {String} Array like representation
 *
 */
LinkedList.prototype.toString = function toString() {

}

/**
 * Get size of linkedList
 *
 * .size()
 *
 * @return {Number}
 */
LinkedList.prototype.size = function size() {
  return this._length;
}

/**
 * Utility method to create circular linkedlist
 *
 * .createCircular()
 *
 * @return {void}
 *
 */
LinkedList.prototype.createCircular = function createCircular() {
  var node = new Node(data);
  if (!this._head) {
    this._head = this._current = node;
    node.next = this._head;
  } else {
    this._current.next = node;
    this._current = node;
    node.next = this._head;
  }
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
  if (this.first == null) {
    return false;
  }
  var fast = this.first;
  var slow = this.first;
  while (fast && fast.next) {
    if (fast.next.next == slow) {
      return true;
    }
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
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
 * internal method get particular index node from linkedList
 *
 * @private
 *
 * @param {Number} index of node
 *
 * @returns {Node} it return node
 *
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

module.exports = LinkedList;
