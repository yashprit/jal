'use strict';
var expect = require('chai').expect;
var jal = require('../lib/Jal.js');


'use strict';
var expect = require('chai').expect;
var jal = require('../lib/Jal.js');

describe("Running Binary Tree", function() {

  var binaryTree;
  beforeEach(function() {
    binaryTree = new jal.BinarySearchTree();
  });

  describe("Testing BinaryTree#insert()", function(){
    it("Should not be empty", function(){
      binaryTree.insert(2);
      binaryTree.insert(1);
      binaryTree.insert(3);
      binaryTree.insert(4);
      expect(binaryTree.isEmpty()).to.be.false;
    });
  });

   describe("Testing BinaryTree#inorder()", function(){
    it("Should return empty array", function(){
      var list = binaryTree.inorder();
      expect(list.length).to.be.equal(0);
    });

    it("Should list in order", function(){
      binaryTree.insert(2);
      binaryTree.insert(1);
      binaryTree.insert(3);
      binaryTree.insert(4);
      var list = binaryTree.inorder();
      expect(list).to.deep.equal([1,2,3,4]);
    });
  });


  describe("Testing BinaryTree#preorder()", function(){
    it("Should return empty array", function(){
      var list = binaryTree.preorder();
      expect(list.length).to.be.equal(0);
    });

    it("Should list preorder", function(){
      binaryTree.insert(2);
      binaryTree.insert(1);
      binaryTree.insert(3);
      binaryTree.insert(4);
      var list = binaryTree.preorder();
      expect(list).to.deep.equal([2,1,3,4]);
    });
  });

  describe("Testing BinaryTree#postorder()", function(){
    it("Should return empty array", function(){
      var list = binaryTree.postorder();
      expect(list.length).to.be.equal(0);
    });

    it("Should list preorder", function(){
      binaryTree.insert(2);
      binaryTree.insert(1);
      binaryTree.insert(3);
      binaryTree.insert(4);
      var list = binaryTree.postorder();
      expect(list).to.deep.equal([1,4,3,2]);
    });
  });

});
