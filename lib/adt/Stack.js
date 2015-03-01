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
		* .pop()
		*
		* @return (String) item
		*/
		pop: function pop() {
			var item;
			if(this._top >= 0) {
				item = this._stack[this._top];
				delete this._stack[this._top];
				this._stack.length = this._top;
				this._top--;
			}
			return item;
		},

		/**
		* returns top element on stack
		*		
		* .getop()
		*
		* @return (String) item
		*/
		getTop: function top() {
			return this._top > -1 ? this._stack[this._top] : undefined;
		}
	}

	exports.Stack = Stack;
})(exports? exports: window)