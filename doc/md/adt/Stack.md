#Index

**Classes**

* [class: Stack](#Stack)
  * [stack.push(item)](#Stack#push)
  * [stack.pop()](#Stack#pop)
  * [stack.peek()](#Stack#peek)
  * [stack.isEmpty()](#Stack#isEmpty)
  * [stack.isFull()](#Stack#isFull)

**Members**

* [MAX_SIZE_ALLOWED](#MAX_SIZE_ALLOWED)
* [MINIMUM_TOP](#MINIMUM_TOP)
 
<a name="Stack"></a>
#class: Stack
**Members**

* [class: Stack](#Stack)
  * [stack.push(item)](#Stack#push)
  * [stack.pop()](#Stack#pop)
  * [stack.peek()](#Stack#peek)
  * [stack.isEmpty()](#Stack#isEmpty)
  * [stack.isFull()](#Stack#isFull)

<a name="Stack#push"></a>
##stack.push(item)
push element to stack
and increment stack top

.push(item)

**Params**

- item `String` | `Number`  

**Type**: `Error`  
<a name="Stack#pop"></a>
##stack.pop()
pop element from stack
and decrement stack top, returns poped element

.pop()

**Returns**: `String` | `Number` - item that was on top of stack  
<a name="Stack#peek"></a>
##stack.peek()
returns top element on stack
  
.peek()

**Returns**: `String` | `Number` - item  
<a name="Stack#isEmpty"></a>
##stack.isEmpty()
returns if stack is empty

.isEmpty()

**Returns**: `boolean` - flag  
<a name="Stack#isFull"></a>
##stack.isFull()
isFull checks if stack is full

**Returns**: `Boolean` - flag  
<a name="MAX_SIZE_ALLOWED"></a>
#MAX_SIZE_ALLOWED
MAX_SIZE_ALLOWED maximum size allowed of stack
it is 2^32 - 1 accoding to http://stackoverflow.com/questions/6154989/maximum-size-of-an-array-in-javascript

**Type**: `Number`  
<a name="MINIMUM_TOP"></a>
#MINIMUM_TOP
MINIMUM_TOP

**Type**: `Number`  
