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
