'use strict'
(function(exports){
	function Node(data, next){
		this.data = data;
		this.next = null;
	}
	
	function LinkedList(){
		this.first = null;
		this.current = null;
	}
	
	LinkedList.prototype = {
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
				var currentNode = 
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
	export.LinkedList = LinkedList;
})(exports? exports: window)