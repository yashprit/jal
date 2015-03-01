'use strict';
var expect = require('chai').expect;
var jal = require('../lib/');

describe("Running Stack Test", function(){
	
	var sll;
  beforeEach(function() {
    sll = new jal.SingleLinkedList();
  });
	
	describe('SingleLinkedList#constuctor()', function () {
	  it('Should initialize SingleLinkedList object', function () {
	    expect(sll).to.be.an.instanceof(jal.SingleLinkedList);
	  });
		
	  it('Should have _length property', function () {
	    expect(sll).to.have.ownProperty('_length');
	  });
		
	  it('_first should be numm', function () {
	    expect(sll._first).to.be.null;
	  });
	});
	
	describe('SingleLinkedList#size()', function () {
	  it('should have size 0', function () {
	    expect(sll._length).to.be.equal(0);
	  });
	});
	
	describe('SingleLinkedList#insertLast()', function () {
	  it('should add new element', function () {
	    sll.insertLast(2);
			expect(sll._first).not.to.be.null;
	  });
		
	  it('last elemnet next should be null', function () {
	    sll.insertLast(2);
			expect(sll._first._next).to.be.null;
	  });
	});
});