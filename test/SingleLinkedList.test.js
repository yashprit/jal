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
	
	describe('SingleLinkedList#count()', function () {
	  it('should have size 0', function () {
	    expect(sll._length).to.be.equal(0);
	  });
	});
	
	describe('SingleLinkedList#append()', function () {
	  it('should add new element', function () {
	    sll.append(2);
			expect(sll._first).not.to.be.null;
	  });
		
	  it('last elemnet next should be null', function () {
	    sll.append(2);
			expect(sll._first._next).to.be.null;
	  });
	});
	
	describe('SingleLinkedList#first()', function () {
	  it('should add new element at first', function () {
	    sll.first(2);
			expect(sll._first._value).to.be.equal(2);
	  });
		
	  it('last elemnet next should be null', function () {
	    sll.last(2);
			sll.last(3);
			sll.first(5)
			expect(sll._first._value).to.be.equal(5);
	  });
	});
	
});