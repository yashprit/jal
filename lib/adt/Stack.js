'use strict';

(function(exports) {
	/**
	* constructor of the stack
	*/
	function Stack() {
		this._stack = [];
		this._top = -1;
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
			this._top++;
			this._stack[this._top] = item;
		},
		
		/**
		* pop element from stack
		* and decrement stack top, returns poped element
		*
		* .pop(item)
		*
		* @return (string) item
		*/
		pop: function pop() {
			this._top--;
			return this._stack.pop()
		},

		/**
		* returns top element on stack
		*		
		* .top()
		*
		* @return (string) item
		*/
		getTop: function top() {
			return this._top !== -1 ? this._stack[this._top] : null;
		}
	}

	exports.Stack = Stack;
})(exports? exports: window)