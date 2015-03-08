'use strict';

(function(exports) {
  /**
   * constructor of the stack
   */
  var MAX_SIZE_ALLOWED = Math.pow(2,31);

  function Stack(size) {
    this._stack = [];
    this._top = -1;
    this._capacity = (size && size <= MAX_SIZE_ALLOWED) ? size : MAX_SIZE_ALLOWED;
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
			if(this._top >= this._capacity){
				throw new Error("Stack overflow");
			}
			this._top++;
			this._stack[this._top] = item;
		},
		
		/**
		* pop element from stack
		* and decrement stack top, returns poped element
		*
		* .pop()
		*
		* @return (String) item
		*/
		pop: function pop() {
			var item;
			if(this._top < 0) {
				throw new Error("Stack underflow");
			}
			item = this._stack[this._top];
			delete this._stack[this._top];
			this._stack.length = this._top;
			this._top--;
			
			return item;
		},

		/**
		* returns top element on stack
		*		
		* .peek()
		*
		* @return (String) item
		*/
		peek: function peek() {
			return this.isEmpty() ? null : this._stack[this._top];
		},

		/**
		* returns if stack is empty
		* 
		*.isEmpty()
		*
		*@return (boolean) flag
		*/
		isEmpty: function isEmpty() {
			return !(this._top > -1);
		}
	}
  exports.Stack = Stack;
})(exports ? exports : window)
