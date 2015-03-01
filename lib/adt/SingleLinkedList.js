'use strict';
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
	 * @private _current {Node}
	 * @private _length {Number}
	 */
	function LinkedList() {
		this._first = null;
		this._current = null;
		this._length = 0;
	};

	/**
	 * add element to last in linkedlist
	 *
	 * .insertLast()
	 *
	 * @private {Node}
	 *
	 * @param {String|Number} data part of Node
	 */
	LinkedList.prototype.insertLast = function(data) {
		var node = new Node(data);
		if (!this._first) {
			this._first = this.current = node;
		} else {
			this._current._next = node;
			this._current = node;
		}
		this._length++;
	}

	/**
	 * Get size of linkedList
	 *
	 * .size()
	 *
	 * @return {Number}
	 */
	LinkedList.prototype.size = function() {
		return this._length;
	}

	exports.SingleLinkedList = LinkedList;
})(exports ? exports : window)
