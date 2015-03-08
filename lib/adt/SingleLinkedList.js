'use strict';
// Problems http://cslibrary.stanford.edu/105/
// http://www.geeksforgeeks.org/nth-node-from-the-end-of-a-linked-list/
(function(exports) {

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
   * @private _head {Node}
   * @private _current {Node}
   * @private _length {Number}
   */

  function LinkedList() {
    this._head = null;
    this._current = null;
    this._length = 0;
  };

  /**
   * internal method get particular index node from linkedList
   *
   * @private .getNth(index)
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
   * @private {Node}
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
   * @private _nthFromEnd(index)
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
   * @return {[type]} [description]
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

  exports.SingleLinkedList = LinkedList;
})(exports ? exports : window)
