'use strict';

(function(exports) {
	/**
	* constructor of the stack
	*/
	function Stack() {
		this.stack = [];
		this.top = -1;
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
			this.top++;
			this.stack[this.top] = item;
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
			this.top--;
			return this.stack.pop()
		},

		/**
		* returns top element on stack
		*		
		* .top()
		*
		* @return (string) item
		*/
		getTop: function top() {
			return this.top !== -1 ? this.stack[this.top] : null;
		}
	}

	exports.Stack = Stack;
})(exports? exports: window)
