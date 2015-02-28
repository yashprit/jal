'use strict';
(function(exports){
	function Node(data, next) {
		this.data = data;
		this.next = null;
	}
	
	function SingleLinkedList(){
		this.first = null;
		this.current = null;
	}
	
	SingleLinkedList.prototype = {
		insertLast: function(data){
			var node = new Node(data);
			if(!this.first){
				this.first = this.last = node;
			} else {
				this.last = node;	
			}
		},
		
		insertFirst: function(data){
			var node = new Node(data);
			var tempList = this.first;
			this.first = node;
			node.next = tempList;
		},
		
		insertAtIndex: function(index, data){
			
		},
		
		removeLast: function(){
			while(this.first.data != this.last.data){ 
			}
			var currentNode = this.current;
			
		},
		
		removeFirst: function(){
			
		},
		
		removeIndex: function(){
			
		},
		
		count: function(){
			
		}
	}
	exports.SingleLinkedList = SingleLinkedList;
})(exports? exports: window)