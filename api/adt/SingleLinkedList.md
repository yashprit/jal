#Index

**Classes**

* [class: Node](#Node)
* [class: LinkedList](#LinkedList)
  * [linkedList.first(data)](#LinkedList#first)
  * [linkedList.last(data)](#LinkedList#last)
  * [linkedList.after(data, index)](#LinkedList#after)
  * [linkedList.before(index, value)](#LinkedList#before)
  * [linkedList.at(index)](#LinkedList#at)
  * [linkedList.pop()](#LinkedList#pop)
  * [linkedList.removeAt(index)](#LinkedList#removeAt)
  * [linkedList.print()](#LinkedList#print)
  * [linkedList.toString()](#LinkedList#toString)
  * [linkedList.size()](#LinkedList#size)
  * [linkedList.createCircular()](#LinkedList#createCircular)
  * [linkedList.isCircular()](#LinkedList#isCircular)

**Functions**

* [last()](#last)
* [last()](#last)
 
<a name="Node"></a>
#class: Node
**Members**

* [class: Node](#Node)

<a name="LinkedList"></a>
#class: LinkedList
**Members**

* [class: LinkedList](#LinkedList)
  * [linkedList.first(data)](#LinkedList#first)
  * [linkedList.last(data)](#LinkedList#last)
  * [linkedList.after(data, index)](#LinkedList#after)
  * [linkedList.before(index, value)](#LinkedList#before)
  * [linkedList.at(index)](#LinkedList#at)
  * [linkedList.pop()](#LinkedList#pop)
  * [linkedList.removeAt(index)](#LinkedList#removeAt)
  * [linkedList.print()](#LinkedList#print)
  * [linkedList.toString()](#LinkedList#toString)
  * [linkedList.size()](#LinkedList#size)
  * [linkedList.createCircular()](#LinkedList#createCircular)
  * [linkedList.isCircular()](#LinkedList#isCircular)

<a name="LinkedList#first"></a>
##linkedList.first(data)
Overloaded Method

insert node at first of linkedlist, this is overloaded version
if no arguments passed than it will return Node otherwise set Node

.first() get refernce of first value from linkedlist
.first(data) set node at first in linkedlist

**Params**

- data `String` | `Number` | `undefined` - is either String or Number  

**Returns**: [Node](#Node) - in case of getter otherwise undefined for case of setter  
<a name="LinkedList#last"></a>
##linkedList.last(data)
Overloaded Method

insert node at last of linkedlist
no arguments passed than it will return Node otherwise set Node

.last(data) set node at last in linkedlist
.last() get refernce of last value from linkedlist

**Params**

- data `String` | `Number` | `undefined` - either String or Number  

**Returns**: [Node](#Node) - in case of getter otherwise undefined for case of setter  
<a name="LinkedList#after"></a>
##linkedList.after(data, index)
add node after specific index

.after(index, data)

**Params**

- data `String` | `Number` - value to be inserted  
- index `Number` - inserting  

<a name="LinkedList#before"></a>
##linkedList.before(index, value)
add node before specific index

.before(index, data)

**Params**

- index `Number` - add elemnet before this index  
- value `String` | `Number` - of node  

<a name="LinkedList#at"></a>
##linkedList.at(index)
Get Node at particular index

.at(index)

**Params**

- index `Number` - of node  

**Returns**: [Node](#Node) - return node at given index  
<a name="LinkedList#pop"></a>
##linkedList.pop()
remove last Node from linkedlist

.pop()

**Returns**: [Node](#Node) - last Node from LinkedList  
<a name="LinkedList#removeAt"></a>
##linkedList.removeAt(index)
Remove node from given Index

.removeAt(index)

**Params**

- index `Number` - of Node that need to be removed  

**Returns**:  - void  
<a name="LinkedList#print"></a>
##linkedList.print()
Print LinkedList

.print()

**Returns**: `String` - Array like representation  
<a name="LinkedList#toString"></a>
##linkedList.toString()
overinding toString method it also alias to #print()

.toString()

**Returns**: `String` - Array like representation  
<a name="LinkedList#size"></a>
##linkedList.size()
Get size of linkedList

.size()

**Returns**: `Number`  
<a name="LinkedList#createCircular"></a>
##linkedList.createCircular()
Utility method to create circular linkedlist

.createCircular()

**Returns**: `void`  
<a name="LinkedList#isCircular"></a>
##linkedList.isCircular()
Check for circular linkedlist

.isCircular()

**Returns**: `Boolean` - this linkedlist is circular  
<a name="last"></a>
#last()
<a name="last"></a>
#last()
