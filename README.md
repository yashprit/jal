#jal  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Dev Dependency Status][daviddmdev-image]][daviddm-url]

> common data structure implementation in javascript


## Install
[![NPM](https://nodei.co/npm/jal.png?mini=true)](https://nodei.co/npm/jal/)

```sh
$ npm install --save jal
```


## Usage

```js
//On NodeJS
var jal = require('jal');

var linkedList = new jal.SingleLinkedList();
linkedlist.add(1);

//On Browser
var linkedlist = new JAL.SingleLinkedList();
linkedlist.add(2);

```

## What's been implemented:
* <a href="https://rawgit.com/yashprit/jal/master/doc/html/Stack.html" target="_blank">Stack</a>
* <a href="https://rawgit.com/yashprit/jal/master/doc/html/SingleLinkedList.html" target="_blank">Single LinkedList</a>

## In progress
* Tree
* Double LinkedList

## Run Test
```sh
npm test
```

## Contribute or Report Issue
For bugs and feature requests, [please create an issue][issue-url].


## License

MIT © [Yashprit](yashprit.github.io)

[issue-url]: https://github.com/yashprit/jal/issues
[npm-url]: https://npmjs.org/package/jal
[npm-image]: https://img.shields.io/npm/v/jal.svg
[travis-url]: https://travis-ci.org/yashprit/jal
[travis-image]: https://travis-ci.org/yashprit/jal.svg?branch=master
[daviddm-image]: https://david-dm.org/yashprit/jal.svg?theme=shields.io
[daviddmdev-image]: https://david-dm.org/yashprit/jal/dev-status.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/yashprit/jal
[bower-url]: http://bower.io/search/?q=owner:yashprit
[bower-image]: https://badge.fury.io/bo/jal@1x.png

