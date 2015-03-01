'use strict';
// Problems http://cslibrary.stanford.edu/105/
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
	 * @private _first {Node}
	 * @private _head {Node}
	 * @private _length {Number}
	 */

	function LinkedList() {
		this._first = null;
		this._head = null;
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
		var node = new Node(data);
		if (!this._first) {
			this._first = this._head = node;
		} else {
			this._head._next = node;
			this._head = node;
		}
		this._length++;
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
		var node = new Node(data);
		if (!this._first) {
			this._first = this._head = node;
		} else {
			node._next = this._first;
			this._first = node;
		}
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
	 * remove last Node from linkedlist
	 *
	 * .pop()
	 *
	 * @returns last Node from LinkedList
	 * @type Node
	 */
	LinkedList.prototype.pop = function pop() {

	}

	/**
	 * Append method, at last of linkedlist
	 *
	 * .append(data)
	 *
	 * @param {String|Number} data of node to be inserted at last of linkedlist
	 * @returns void
	 * @type undefined
	 */
	LinkedList.prototype.append = function append(data) {

	}

	/**
	 * Alias for append
	 */
	LinkedList.prototype.push = function push() {
		this.append.apply(argument);
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

	exports.SingleLinkedList = LinkedList;
})(exports ? exports : window)
