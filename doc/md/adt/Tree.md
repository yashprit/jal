<a name="Tree"></a>
#class: Tree
**Members**

* [class: Tree](#Tree)
  * [tree.size()](#Tree#size)
  * [tree.isEmpty()](#Tree#isEmpty)
  * [tree.root(node)](#Tree#root)
  * [tree.isRoot()](#Tree#isRoot)
  * [tree.parent(position)](#Tree#parent)
  * [tree.children(position)](#Tree#children)
  * [tree.isInternal(position)](#Tree#isInternal)
  * [tree.isExternal(node)](#Tree#isExternal)
  * [tree.isRoot(node)](#Tree#isRoot)
  * [tree.elements()](#Tree#elements)
  * [tree.positions()](#Tree#positions)
  * [tree.replace(positionTo, positionFrom)](#Tree#replace)
  * [tree.add(data, position)](#Tree#add)
  * [tree.remove(position)](#Tree#remove)

<a name="Tree#size"></a>
##tree.size()
Show size of current tree

**Returns**: `Number` - return size of tree  
<a name="Tree#isEmpty"></a>
##tree.isEmpty()
Tell tree is empty or not

**Returns**: `Boolean` - tree is empty ot not  
<a name="Tree#root"></a>
##tree.root(node)
return root node of tree

**Params**

- node `Object` - node  

**Returns**: `Object` - root node position  
<a name="Tree#isRoot"></a>
##tree.isRoot()
return current node is root or not

**Returns**: `Boolean` - return node is root or not  
<a name="Tree#parent"></a>
##tree.parent(position)
return parent of passsed node

**Params**

- position `Object` - position of node  

**Returns**: `Object` - return parent of node  
<a name="Tree#children"></a>
##tree.children(position)
return children of node

**Params**

- position `Object` - position of node  

**Returns**: `Object` - return Iterator or list of children  
<a name="Tree#isInternal"></a>
##tree.isInternal(position)
return node is internal or not

**Params**

- position `Object` - node is internal or not  

**Returns**: `Boolean` - return node is internal or not  
<a name="Tree#isExternal"></a>
##tree.isExternal(node)
return node is external or not

**Params**

- node `Object` - node to check  

**Returns**: `Boolean` - return true or false based on condition matched  
<a name="Tree#isRoot"></a>
##tree.isRoot(node)
is node passed is root node or not

**Params**

- node `Object` - node to check  

**Returns**: `Boolean` - return true/false based on condition  
<a name="Tree#elements"></a>
##tree.elements()
get all tree element starting from root

**Returns**: `Object` - Iterator  
<a name="Tree#positions"></a>
##tree.positions()
get all tree element starting from root

**Returns**: `Object` - Iterator  
<a name="Tree#replace"></a>
##tree.replace(positionTo, positionFrom)
[replace description]

**Params**

- positionTo `Object` - replace to  
- positionFrom `Object` - replace with  

**Returns**: `void`  
<a name="Tree#add"></a>
##tree.add(data, position)
Add node to tree

**Params**

- data `Number` | `String` - data to be added in tree  
- position `Number` - add node provided position  

**Returns**: `void`  
<a name="Tree#remove"></a>
##tree.remove(position)
remove node from tree

**Params**

- position `Number` - remove node from position  

**Returns**: `Void`  
