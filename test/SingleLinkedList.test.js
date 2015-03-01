'use strict';
var expect = require('chai').expect;
var jal = require('../lib/');

describe("Running SingleLinkedList Test", function() {

  var sll;
  beforeEach(function() {
    sll = new jal.SingleLinkedList();
  });

  describe('SingleLinkedList#constuctor()', function() {
    it('Should initialize SingleLinkedList object', function() {
      expect(sll).to.be.an.instanceof(jal.SingleLinkedList);
    });

    it('Should have _length property', function() {
      expect(sll).to.have.ownProperty('_length');
    });

    it('_head should be numm', function() {
      expect(sll._head).to.be.null;
    });
  });

  describe('SingleLinkedList#count()', function() {
    it('should have size 0', function() {
      expect(sll._length).to.be.equal(0);
    });
  });

  describe('SingleLinkedList#last()', function() {
    it('should add new element', function() {
      sll.last(2);
      expect(sll._head).not.to.be.null;
    });

    it('last elemnet next should be null', function() {
      sll.last(2);
      expect(sll._head._next).to.be.null;
    });

    it("overloaded version, get value from last", function() {
      sll.last(2);
      var x = sll.last();
      expect(x._data).to.be.equal(2);
    });
  });

  describe('SingleLinkedList#first()', function() {
    it('should add element at first', function() {
      sll.last(2);
      sll.last(3);
      sll.first(5);
      expect(sll._head._data).to.be.equal(5);
    });

    it('overloaded version, get first element', function() {
      sll.last(2);
      sll.last(3);
      sll.first(5);
      var element = sll.first();
      expect(element._data).to.be.equal(5);
    });
  });

  describe('SingleLinkedList#pop()', function() {
    it('should pop last element from linkedlist', function() {
      sll.last(2);
      sll.last(3);
      sll.first(5);
      var element = sll.pop()
      expect(element._data).to.be.equal(3);
    });

    it('should modify length of linkedlist', function() {
      sll.last(2);
      sll.last(3);
      sll.first(5);
      var element = sll.pop();
      expect(element._data).to.have.length.below(2);
    });
  });

  describe('SingleLinkedList#pop()', function() {
    it('should pop last element from linkedlist', function() {
      sll.last(2);
      sll.last(3);
      sll.first(5);
      var element = sll.pop()
      expect(element._data).to.be.equal(3);
    });

    it('should modify length of linkedlist', function() {
      sll.last(2);
      sll.last(3);
      sll.first(5);
      var element = sll.pop();
      expect(element._data).to.have.length.below(2);
    });
  });

  describe('SingleLinkedList#after()', function() {
    it('should insert node after provided index from start', function() {
      sll.last(2);
      sll.last(3);
      sll.first(5);
      sll.after(2, 2);
      expect(sll.count()).to.be.equal(4);
    });

    it('index should not be greater than count of existing linkedlist', function() {
      sll.last(2);
      sll.last(3);
      sll.first(5);
      expect(sll.after.bind(6, 2)).to.throw("index should be less than count");
    });

    it('index should not be less than 0', function() {
      sll.last(2);
      sll.last(3);
      sll.first(5);
      expect(sll.before.bind(-1, 2)).to.throw("invalid index");
    });
  });

  describe('SingleLinkedList#before()', function() {
    it('should insert node before provided index from start', function() {
      sll.last(2);
      sll.last(3);
      sll.first(5);
      sll.before(2, 2);
      expect(sll.count()).to.be.equal(4);
    });

    it('index should not be greater than count of existing linkedlist', function() {
      sll.last(2);
      sll.last(3);
      sll.first(5);
      expect(sll.before.bind(6, 2)).to.throw("index should be less than count");
    });

    it('index should not be less than 0', function() {
      sll.last(2);
      sll.last(3);
      sll.first(5);
      expect(sll.before.bind(-1, 2)).to.throw("invalid index");
    });
  });

  describe('SingleLinkedList#append()', function() {
    it('alias for .last()', function() {
      sll.last(2);
      expect(sll._head).not.to.be.null;
    });
  });

  describe('SingleLinkedList#push()', function() {
    it('alias for .last()', function() {
      sll.last(2);
      expect(sll._head).not.to.be.null;
    });
  });

});
