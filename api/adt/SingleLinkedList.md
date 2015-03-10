#Index

**Classes**

* [class: Node](#Node)
* [class: LinkedList](#LinkedList)
  * [linkedList.last(data)](#LinkedList#last)
  * [linkedList.append()](#LinkedList#append)
  * [linkedList.push()](#LinkedList#push)
  * [linkedList.after(data,, index,)](#LinkedList#after)
  * [linkedList.before(index,, ,)](#LinkedList#before)
  * [linkedList.at(index)](#LinkedList#at)
  * [linkedList.pop()](#LinkedList#pop)
  * [linkedList.removeAt(index)](#LinkedList#removeAt)
  * [linkedList.print()](#LinkedList#print)
  * [linkedList.count()](#LinkedList#count)
  * [linkedList.createCircular()](#LinkedList#createCircular)
  * [linkedList.isCircular()](#LinkedList#isCircular)
 
<a name="Node"></a>
#class: Node
**Members**

* [class: Node](#Node)

<a name="LinkedList"></a>
#class: LinkedList
**Members**

* [class: LinkedList](#LinkedList)
  * [linkedList.last(data)](#LinkedList#last)
  * [linkedList.append()](#LinkedList#append)
  * [linkedList.push()](#LinkedList#push)
  * [linkedList.after(data,, index,)](#LinkedList#after)
  * [linkedList.before(index,, ,)](#LinkedList#before)
  * [linkedList.at(index)](#LinkedList#at)
  * [linkedList.pop()](#LinkedList#pop)
  * [linkedList.removeAt(index)](#LinkedList#removeAt)
  * [linkedList.print()](#LinkedList#print)
  * [linkedList.count()](#LinkedList#count)
  * [linkedList.createCircular()](#LinkedList#createCircular)
  * [linkedList.isCircular()](#LinkedList#isCircular)

<a name="LinkedList#last"></a>
##linkedList.last(data)
insert node at first of linkedlist, this is overloaded version

.last() get refernce of first value from linkedlist
.last(data) set node at last

**Params**

- data `String` | `Number` | `undefined` - either String or Number  

**Returns**: [Node](#Node) - in case if its not set  
<a name="LinkedList#append"></a>
##linkedList.append()
Alias for last

<a name="LinkedList#push"></a>
##linkedList.push()
Alias for last

<a name="LinkedList#after"></a>
##linkedList.after(data,, index,)
add node after specific index

.after(index, data)

**Params**

- data, `String` | `Number` - value to be inserted  
- index, `Number` - inserting  

<a name="LinkedList#before"></a>
##linkedList.before(index,, ,)
add node before specific index

.before(index, data)

**Params**

- index, `Number` - add elemnet before this index  
- , `String` | `Number` - value of node  

<a name="LinkedList#at"></a>
##linkedList.at(index)
Get Node at particular index

.at(index)

**Params**

- index `Number` - of node  

**Type**: [Node](#Node)  
**Returns**:  - return node at given index  
<a name="LinkedList#pop"></a>
##linkedList.pop()
remove last Node from linkedlist

.pop()

**Type**: [Node](#Node)  
**Returns**:  - last Node from LinkedList  
<a name="LinkedList#removeAt"></a>
##linkedList.removeAt(index)
Remove node from given Index

.removeAt(index)

**Params**

- index `Number` - of Node that need to be removed  

**Type**: `undefined`  
**Returns**:  - void  
<a name="LinkedList#print"></a>
##linkedList.print()
Print LinkedList

.print()

**Type**: `String`  
**Returns**:  - all linkedlist  
<a name="LinkedList#count"></a>
##linkedList.count()
Get size of linkedList

.size()

**Returns**: `Number`  
<a name="LinkedList#createCircular"></a>
##linkedList.createCircular()
Utility method to create circular linkedlist

<a name="LinkedList#isCircular"></a>
##linkedList.isCircular()
Check for circular linkedlist

.isCircular()

**Type**: `Boolean`  
**Returns**:  - this linkedlist is circular  
