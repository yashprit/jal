## Classes
<dl>
<dt><a href="#Node">Node</a></dt>
<dd></dd>
<dt><a href="#SingleLinkedList">SingleLinkedList</a></dt>
<dd></dd>
</dl>
## Functions
<dl>
<dt><a href="#last">last()</a></dt>
<dd></dd>
<dt><a href="#last">last()</a></dt>
<dd></dd>
</dl>
<a name="Node"></a>
## Node
**Kind**: global class  
<a name="SingleLinkedList"></a>
## SingleLinkedList
**Kind**: global class  

* [SingleLinkedList](#SingleLinkedList)
  * [.first(data)](#SingleLinkedList#first) ⇒ <code>[Node](#Node)</code>
  * [.last(data)](#SingleLinkedList#last) ⇒ <code>[Node](#Node)</code>
  * [.after(data, index)](#SingleLinkedList#after)
  * [.before(index, value)](#SingleLinkedList#before)
  * [.at(index)](#SingleLinkedList#at) ⇒ <code>[Node](#Node)</code>
  * [.pop()](#SingleLinkedList#pop) ⇒ <code>[Node](#Node)</code>
  * [.removeAt(index)](#SingleLinkedList#removeAt) ⇒
  * [.print()](#SingleLinkedList#print) ⇒ <code>String</code>
  * [.toString()](#SingleLinkedList#toString) ⇒ <code>String</code>
  * [.size()](#SingleLinkedList#size) ⇒ <code>Number</code>
  * [.createCircular()](#SingleLinkedList#createCircular) ⇒ <code>void</code>
  * [.isCircular()](#SingleLinkedList#isCircular) ⇒ <code>Boolean</code>

<a name="SingleLinkedList#first"></a>
### singleLinkedList.first(data) ⇒ <code>[Node](#Node)</code>
Overloaded Method

insert node at first of linkedlist, this is overloaded version
if no arguments passed than it will return Node otherwise set Node

.first() get refernce of first value from linkedlist
.first(data) set node at first in linkedlist

**Kind**: instance method of <code>[SingleLinkedList](#SingleLinkedList)</code>  
**Returns**: <code>[Node](#Node)</code> - in case of getter otherwise undefined for case of setter  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> &#124; <code>Number</code> &#124; <code>undefined</code> | is either String or Number |

<a name="SingleLinkedList#last"></a>
### singleLinkedList.last(data) ⇒ <code>[Node](#Node)</code>
Overloaded Method

insert node at last of linkedlist
no arguments passed than it will return Node otherwise set Node

.last(data) set node at last in linkedlist
.last() get refernce of last value from linkedlist

**Kind**: instance method of <code>[SingleLinkedList](#SingleLinkedList)</code>  
**Returns**: <code>[Node](#Node)</code> - in case of getter otherwise undefined for case of setter  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> &#124; <code>Number</code> &#124; <code>undefined</code> | either String or Number |

<a name="SingleLinkedList#after"></a>
### singleLinkedList.after(data, index)
add node after specific index

.after(index, data)

**Kind**: instance method of <code>[SingleLinkedList](#SingleLinkedList)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> &#124; <code>Number</code> | value to be inserted |
| index | <code>Number</code> | inserting |

<a name="SingleLinkedList#before"></a>
### singleLinkedList.before(index, value)
add node before specific index

.before(index, data)

**Kind**: instance method of <code>[SingleLinkedList](#SingleLinkedList)</code>  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | add elemnet before this index |
| value | <code>String</code> &#124; <code>Number</code> | of node |

<a name="SingleLinkedList#at"></a>
### singleLinkedList.at(index) ⇒ <code>[Node](#Node)</code>
Get Node at particular index

.at(index)

**Kind**: instance method of <code>[SingleLinkedList](#SingleLinkedList)</code>  
**Returns**: <code>[Node](#Node)</code> - return node at given index  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | of node |

<a name="SingleLinkedList#pop"></a>
### singleLinkedList.pop() ⇒ <code>[Node](#Node)</code>
remove last Node from linkedlist

.pop()

**Kind**: instance method of <code>[SingleLinkedList](#SingleLinkedList)</code>  
**Returns**: <code>[Node](#Node)</code> - last Node from SingleLinkedList  
<a name="SingleLinkedList#removeAt"></a>
### singleLinkedList.removeAt(index) ⇒
Remove node from given Index

.removeAt(index)

**Kind**: instance method of <code>[SingleLinkedList](#SingleLinkedList)</code>  
**Returns**: void  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | of Node that need to be removed |

<a name="SingleLinkedList#print"></a>
### singleLinkedList.print() ⇒ <code>String</code>
Print SingleLinkedList

.print()

**Kind**: instance method of <code>[SingleLinkedList](#SingleLinkedList)</code>  
**Returns**: <code>String</code> - Array like representation  
<a name="SingleLinkedList#toString"></a>
### singleLinkedList.toString() ⇒ <code>String</code>
overinding toString method it also alias to #print()

.toString()

**Kind**: instance method of <code>[SingleLinkedList](#SingleLinkedList)</code>  
**Returns**: <code>String</code> - Array like representation  
<a name="SingleLinkedList#size"></a>
### singleLinkedList.size() ⇒ <code>Number</code>
Get size of linkedList

.size()

**Kind**: instance method of <code>[SingleLinkedList](#SingleLinkedList)</code>  
<a name="SingleLinkedList#createCircular"></a>
### singleLinkedList.createCircular() ⇒ <code>void</code>
Utility method to create circular linkedlist

.createCircular()

**Kind**: instance method of <code>[SingleLinkedList](#SingleLinkedList)</code>  
<a name="SingleLinkedList#isCircular"></a>
### singleLinkedList.isCircular() ⇒ <code>Boolean</code>
Check for circular linkedlist

.isCircular()

**Kind**: instance method of <code>[SingleLinkedList](#SingleLinkedList)</code>  
**Returns**: <code>Boolean</code> - this linkedlist is circular  
<a name="last"></a>
## last()
**Kind**: global function  
<a name="last"></a>
## last()
**Kind**: global function  
