
class Node {
	constructor(data) {
		this._data = data;
		this._next = null;
	}
}

export class LinkedList {
	constructor() {
		this._head = null;
		this._current = null;
		this.length = 0;
	}

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
	first(data) {
	  if (data) {
	    let node = new Node(data);
	    if (!this._head) {
	      this._head = this._current = node;
	    } else {
	      node._next = this._head;
	      this._head = node;
	    }
	    this._length++;
	  } else {
	    return this._head;
	  }
	}
}