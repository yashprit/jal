"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Node = function Node(data) {
  _classCallCheck(this, Node);

  this._data = data;
  this._next = null;
};

var LinkedList = exports.LinkedList = (function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this._head = null;
    this._current = null;
    this.length = 0;
  }

  _prototypeProperties(LinkedList, null, {
    first: {

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
      value: function first(data) {
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
          return this._head;
        }
      },
      writable: true,
      configurable: true
    },
    last: {
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
      value: function last(data) {
        if (data) {
          var node = new Node(data);
          if (!this.head) {
            this._head = node;
          } else if (this._current && this._current.next === null) {
            this._current.next = node;
          } else {
            var temp = this._head;
            while (temp) {
              temp = temp.next;
            }
            temp.next = node;
          }
          this._current = node;
          this._length++;
        } else {
          return this._current;
        }
      },
      writable: true,
      configurable: true
    }
  });

  return LinkedList;
})();
Object.defineProperty(exports, "__esModule", {
  value: true
});