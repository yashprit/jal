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
