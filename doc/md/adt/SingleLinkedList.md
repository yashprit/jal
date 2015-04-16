#Index

**Classes**

* [class: Node](#Node)
* [class: SingleLinkedList](#SingleLinkedList)
  * [singleLinkedList.first(data)](#SingleLinkedList#first)
  * [singleLinkedList.last(data)](#SingleLinkedList#last)
  * [singleLinkedList.after(data, index)](#SingleLinkedList#after)
  * [singleLinkedList.before(index, value)](#SingleLinkedList#before)
  * [singleLinkedList.at(index)](#SingleLinkedList#at)
  * [singleLinkedList.pop()](#SingleLinkedList#pop)
  * [singleLinkedList.removeAt(index)](#SingleLinkedList#removeAt)
  * [singleLinkedList.print()](#SingleLinkedList#print)
  * [singleLinkedList.toString()](#SingleLinkedList#toString)
  * [singleLinkedList.size()](#SingleLinkedList#size)
  * [singleLinkedList.createCircular()](#SingleLinkedList#createCircular)
  * [singleLinkedList.isCircular()](#SingleLinkedList#isCircular)

**Functions**

* [last()](#last)
* [last()](#last)
 
<a name="Node"></a>
#class: Node
**Members**

* [class: Node](#Node)

<a name="SingleLinkedList"></a>
#class: SingleLinkedList
**Members**

* [class: SingleLinkedList](#SingleLinkedList)
  * [singleLinkedList.first(data)](#SingleLinkedList#first)
  * [singleLinkedList.last(data)](#SingleLinkedList#last)
  * [singleLinkedList.after(data, index)](#SingleLinkedList#after)
  * [singleLinkedList.before(index, value)](#SingleLinkedList#before)
  * [singleLinkedList.at(index)](#SingleLinkedList#at)
  * [singleLinkedList.pop()](#SingleLinkedList#pop)
  * [singleLinkedList.removeAt(index)](#SingleLinkedList#removeAt)
  * [singleLinkedList.print()](#SingleLinkedList#print)
  * [singleLinkedList.toString()](#SingleLinkedList#toString)
  * [singleLinkedList.size()](#SingleLinkedList#size)
  * [singleLinkedList.createCircular()](#SingleLinkedList#createCircular)
  * [singleLinkedList.isCircular()](#SingleLinkedList#isCircular)

<a name="SingleLinkedList#first"></a>
##singleLinkedList.first(data)
Overloaded Method

insert node at first of linkedlist, this is overloaded version
if no arguments passed than it will return Node otherwise set Node

.first() get refernce of first value from linkedlist
.first(data) set node at first in linkedlist

**Params**

- data `String` | `Number` | `undefined` - is either String or Number  

**Returns**: [Node](#Node) - in case of getter otherwise undefined for case of setter  
<a name="SingleLinkedList#last"></a>
##singleLinkedList.last(data)
Overloaded Method

insert node at last of linkedlist
no arguments passed than it will return Node otherwise set Node

.last(data) set node at last in linkedlist
.last() get refernce of last value from linkedlist

**Params**

- data `String` | `Number` | `undefined` - either String or Number  

**Returns**: [Node](#Node) - in case of getter otherwise undefined for case of setter  
<a name="SingleLinkedList#after"></a>
##singleLinkedList.after(data, index)
add node after specific index

.after(index, data)

**Params**

- data `String` | `Number` - value to be inserted  
- index `Number` - inserting  

<a name="SingleLinkedList#before"></a>
##singleLinkedList.before(index, value)
add node before specific index

.before(index, data)

**Params**

- index `Number` - add elemnet before this index  
- value `String` | `Number` - of node  

<a name="SingleLinkedList#at"></a>
##singleLinkedList.at(index)
Get Node at particular index

.at(index)

**Params**

- index `Number` - of node  

**Returns**: [Node](#Node) - return node at given index  
<a name="SingleLinkedList#pop"></a>
##singleLinkedList.pop()
remove last Node from linkedlist

.pop()

**Returns**: [Node](#Node) - last Node from SingleLinkedList  
<a name="SingleLinkedList#removeAt"></a>
##singleLinkedList.removeAt(index)
Remove node from given Index

.removeAt(index)

**Params**

- index `Number` - of Node that need to be removed  

**Returns**:  - void  
<a name="SingleLinkedList#print"></a>
##singleLinkedList.print()
Print SingleLinkedList

.print()

**Returns**: `String` - Array like representation  
<a name="SingleLinkedList#toString"></a>
##singleLinkedList.toString()
overinding toString method it also alias to #print()

.toString()

**Returns**: `String` - Array like representation  
<a name="SingleLinkedList#size"></a>
##singleLinkedList.size()
Get size of linkedList

.size()

**Returns**: `Number`  
<a name="SingleLinkedList#createCircular"></a>
##singleLinkedList.createCircular()
Utility method to create circular linkedlist

.createCircular()

**Returns**: `void`  
<a name="SingleLinkedList#isCircular"></a>
##singleLinkedList.isCircular()
Check for circular linkedlist

.isCircular()

**Returns**: `Boolean` - this linkedlist is circular  
<a name="last"></a>
#last()
<a name="last"></a>
#last()
