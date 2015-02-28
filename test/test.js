/*global describe, it */
'use strict';
var assert = require('assert');
var dataStructureInJavascript = require('../');
var dataStructureInJavascript = require('../src/stack/stack');
var stack;
// describe('data-structure-in-javascript node module', function () {
//   it('must have at least one test', function () {
//     dataStructureInJavascript();
//     assert(false, 'I was too lazy to write any tests. Shame on me.');
//   });
// });

describe('stack constuctor', function () {
  it('Should initialize stack as empty array', function () {
    var stack = new dataStructureInJavascript.Stack();
    assert(stack.stack.length == 0, "empty stack")
  });
  it('Should set top to -1', function () {
    var stack = new dataStructureInJavascript.Stack();
    assert(stack.top == -1, "empty stack")
  });
});
describe('stack push', function () {
  beforeEach(function() {
    stack = new dataStructureInJavascript.Stack();
  })
  it('Should add item to stack', function () {
    stack.push(3);
    assert(stack.stack.length == 1)
  });
  it('Should set top to 0 after adding one element', function () {
    stack.push(5);
    assert(stack.top == 0)
  });
});

describe('stack pop', function () {
  beforeEach(function() {
    stack = new dataStructureInJavascript.Stack();
  })
  it('Should return last inserted element from stack', function () {
    stack.push(3);
    stack.push(2);
    var item = stack.pop();
    assert(item == 2)
  });
  it('Should remove one element from stack', function () {
    stack.push(5);
    stack.push(2);
    var len1 = stack.stack.length;
    stack.pop();
    var len2 = stack.stack.length;
    assert(len1 == len2+1)
  });
});

describe('stack getTop', function () {
  beforeEach(function() {
    stack = new dataStructureInJavascript.Stack();
  })
  it('Should return top element on stack', function () {
    stack.push(3);
    stack.push(2);
    assert(stack.getTop() == 2)
  });
  it('Should return null if stack is empty', function () {
    assert(stack.getTop() == null)
  });
});
