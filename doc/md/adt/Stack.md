## Classes
<dl>
<dt><a href="#Stack">Stack</a></dt>
<dd></dd>
</dl>
## Members
<dl>
<dt><a href="#MAX_SIZE_ALLOWED">MAX_SIZE_ALLOWED</a> : <code>Number</code></dt>
<dd><p>MAX_SIZE_ALLOWED maximum size allowed of stack
it is 2^32 - 1 accoding to <a href="http://stackoverflow.com/questions/6154989/maximum-size-of-an-array-in-javascript">http://stackoverflow.com/questions/6154989/maximum-size-of-an-array-in-javascript</a></p>
</dd>
<dt><a href="#MINIMUM_TOP">MINIMUM_TOP</a> : <code>Number</code></dt>
<dd><p>MINIMUM_TOP</p>
</dd>
</dl>
<a name="Stack"></a>
## Stack
**Kind**: global class  

* [Stack](#Stack)
  * [.push(item)](#Stack#push)
  * [.pop()](#Stack#pop) ⇒ <code>String</code> &#124; <code>Number</code>
  * [.peek()](#Stack#peek) ⇒ <code>String</code> &#124; <code>Number</code>
  * [.isEmpty()](#Stack#isEmpty) ⇒ <code>boolean</code>
  * [.isFull()](#Stack#isFull) ⇒ <code>Boolean</code>

<a name="Stack#push"></a>
### stack.push(item)
push element to stack
and increment stack top

.push(item)

**Kind**: instance method of <code>[Stack](#Stack)</code>  
**Throws**:

- <code>Error</code> If [stack is full]


| Param | Type |
| --- | --- |
| item | <code>String</code> &#124; <code>Number</code> | 

<a name="Stack#pop"></a>
### stack.pop() ⇒ <code>String</code> &#124; <code>Number</code>
pop element from stack
and decrement stack top, returns poped element

.pop()

**Kind**: instance method of <code>[Stack](#Stack)</code>  
**Returns**: <code>String</code> &#124; <code>Number</code> - item that was on top of stack  
<a name="Stack#peek"></a>
### stack.peek() ⇒ <code>String</code> &#124; <code>Number</code>
returns top element on stack
  
.peek()

**Kind**: instance method of <code>[Stack](#Stack)</code>  
**Returns**: <code>String</code> &#124; <code>Number</code> - item  
<a name="Stack#isEmpty"></a>
### stack.isEmpty() ⇒ <code>boolean</code>
returns if stack is empty

.isEmpty()

**Kind**: instance method of <code>[Stack](#Stack)</code>  
**Returns**: <code>boolean</code> - flag  
<a name="Stack#isFull"></a>
### stack.isFull() ⇒ <code>Boolean</code>
isFull checks if stack is full

**Kind**: instance method of <code>[Stack](#Stack)</code>  
**Returns**: <code>Boolean</code> - flag  
<a name="MAX_SIZE_ALLOWED"></a>
## MAX_SIZE_ALLOWED : <code>Number</code>
MAX_SIZE_ALLOWED maximum size allowed of stack
it is 2^32 - 1 accoding to http://stackoverflow.com/questions/6154989/maximum-size-of-an-array-in-javascript

**Kind**: global variable  
<a name="MINIMUM_TOP"></a>
## MINIMUM_TOP : <code>Number</code>
MINIMUM_TOP

**Kind**: global variable  
