<a name="Tree"></a>
## Tree
**Kind**: global class  

* [Tree](#Tree)
  * [.size()](#Tree#size) ⇒ <code>Number</code>
  * [.isEmpty()](#Tree#isEmpty) ⇒ <code>Boolean</code>
  * [.root(node)](#Tree#root) ⇒ <code>Object</code>
  * [.isRoot()](#Tree#isRoot) ⇒ <code>Boolean</code>
  * [.parent(position)](#Tree#parent) ⇒ <code>Object</code>
  * [.children(position)](#Tree#children) ⇒ <code>Object</code>
  * [.isInternal(position)](#Tree#isInternal) ⇒ <code>Boolean</code>
  * [.isExternal(node)](#Tree#isExternal) ⇒ <code>Boolean</code>
  * [.isRoot(node)](#Tree#isRoot) ⇒ <code>Boolean</code>
  * [.elements()](#Tree#elements) ⇒ <code>Object</code>
  * [.positions()](#Tree#positions) ⇒ <code>Object</code>
  * [.replace(positionTo, positionFrom)](#Tree#replace) ⇒ <code>void</code>
  * [.add(data, position)](#Tree#add) ⇒ <code>void</code>
  * [.remove(position)](#Tree#remove) ⇒ <code>Void</code>

<a name="Tree#size"></a>
### tree.size() ⇒ <code>Number</code>
Show size of current tree

**Kind**: instance method of <code>[Tree](#Tree)</code>  
**Returns**: <code>Number</code> - return size of tree  
<a name="Tree#isEmpty"></a>
### tree.isEmpty() ⇒ <code>Boolean</code>
Tell tree is empty or not

**Kind**: instance method of <code>[Tree](#Tree)</code>  
**Returns**: <code>Boolean</code> - tree is empty ot not  
<a name="Tree#root"></a>
### tree.root(node) ⇒ <code>Object</code>
return root node of tree

**Kind**: instance method of <code>[Tree](#Tree)</code>  
**Returns**: <code>Object</code> - root node position  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | node |

<a name="Tree#isRoot"></a>
### tree.isRoot() ⇒ <code>Boolean</code>
return current node is root or not

**Kind**: instance method of <code>[Tree](#Tree)</code>  
**Returns**: <code>Boolean</code> - return node is root or not  
<a name="Tree#parent"></a>
### tree.parent(position) ⇒ <code>Object</code>
return parent of passsed node

**Kind**: instance method of <code>[Tree](#Tree)</code>  
**Returns**: <code>Object</code> - return parent of node  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Object</code> | position of node |

<a name="Tree#children"></a>
### tree.children(position) ⇒ <code>Object</code>
return children of node

**Kind**: instance method of <code>[Tree](#Tree)</code>  
**Returns**: <code>Object</code> - return Iterator or list of children  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Object</code> | position of node |

<a name="Tree#isInternal"></a>
### tree.isInternal(position) ⇒ <code>Boolean</code>
return node is internal or not

**Kind**: instance method of <code>[Tree](#Tree)</code>  
**Returns**: <code>Boolean</code> - return node is internal or not  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Object</code> | node is internal or not |

<a name="Tree#isExternal"></a>
### tree.isExternal(node) ⇒ <code>Boolean</code>
return node is external or not

**Kind**: instance method of <code>[Tree](#Tree)</code>  
**Returns**: <code>Boolean</code> - return true or false based on condition matched  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | node to check |

<a name="Tree#isRoot"></a>
### tree.isRoot(node) ⇒ <code>Boolean</code>
is node passed is root node or not

**Kind**: instance method of <code>[Tree](#Tree)</code>  
**Returns**: <code>Boolean</code> - return true/false based on condition  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | node to check |

<a name="Tree#elements"></a>
### tree.elements() ⇒ <code>Object</code>
get all tree element starting from root

**Kind**: instance method of <code>[Tree](#Tree)</code>  
**Returns**: <code>Object</code> - Iterator  
<a name="Tree#positions"></a>
### tree.positions() ⇒ <code>Object</code>
get all tree element starting from root

**Kind**: instance method of <code>[Tree](#Tree)</code>  
**Returns**: <code>Object</code> - Iterator  
<a name="Tree#replace"></a>
### tree.replace(positionTo, positionFrom) ⇒ <code>void</code>
[replace description]

**Kind**: instance method of <code>[Tree](#Tree)</code>  

| Param | Type | Description |
| --- | --- | --- |
| positionTo | <code>Object</code> | replace to |
| positionFrom | <code>Object</code> | replace with |

<a name="Tree#add"></a>
### tree.add(data, position) ⇒ <code>void</code>
Add node to tree

**Kind**: instance method of <code>[Tree](#Tree)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Number</code> &#124; <code>String</code> | data to be added in tree |
| position | <code>Number</code> | add node provided position |

<a name="Tree#remove"></a>
### tree.remove(position) ⇒ <code>Void</code>
remove node from tree

**Kind**: instance method of <code>[Tree](#Tree)</code>  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Number</code> | remove node from position |

