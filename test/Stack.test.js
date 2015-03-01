'use strict';
var expect = require('chai').expect;
var jal = require('../lib/');

describe("Running Stack Test", function(){
	
	var stack;
  beforeEach(function() {
    stack = new jal.Stack();
  });
	
	describe('Stack#constuctor()', function () {
	  it('Should initialize stack as empty array', function () {
	    expect(stack).to.be.an.instanceof(jal.Stack);
	  });
		
	  it('Should have _top property', function () {
	    expect(stack).to.have.ownProperty('_top');
	  });
		
	  it('top of stack should be -1', function () {
	    expect(stack._top).to.equal(-1);
	  });
	});
	
	describe('Stack#push()', function () {
	  it('Should set top to 0 after adding one element', function () {
	    stack.push(3);
	    expect(stack._top).to.equal(0);
	  });
		
	  it('Should add item to stack', function () {
	    stack.push(5);
	    expect(stack._stack.length).to.equal(1);
	  });
	});

	describe('Stack#pop()', function () {
	  it('Should return last inserted element from stack', function () {
			stack.push(6);
	    var item = stack.pop();
	    expect(item).to.equal(6);
	  });

	  it('Should return undefined, if stack is empty', function () {
	    var item = stack.pop();
	    expect(item).to.be.undefined;
	  });
		
	  it('Should remove one element from stack', function () {
			stack.push(5);
			stack.push(4);
	    var currentLength = stack._stack.length;
	    stack.pop();
			expect(stack._stack).to.have.length.below(currentLength);
	  });
	});

	describe('Stack#getTop()', function () {
	  it('Should return undefined if stack is empty', function () {
			expect(stack.getTop()).to.be.undefined;
	  });
		
	  it('Should return top element on stack', function () {
	    stack.push(3);
	    stack.push(2);
	    expect(stack.getTop()).to.equal(2);
	  });
	});
});