'use strict';
(function(exports) {
	function Node(data, next) {
		this._data = data;
		this._next = null;
	};

	function LinkedList() {
		this._first = null;
		this._current = null;
		this._length = 0;
	};

	/**
	 * Method that will add element to last of linkedList
	 *
	 * .insertLast(data)
	 *
	 * @param {Number} data
	 * @return undefined
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
	LinkedList.prototype.size = function(){
		return this._length;
	}

	exports.SingleLinkedList = LinkedList;
})(exports ? exports : window)
