# jal  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dev Dependency Status][daviddmdev-image]][daviddm-url]

> common data structure implementation in javascript


## Install

### npm
[![NPM](https://nodei.co/npm/jal.png?mini=true)](https://nodei.co/npm/jal/)

```sh
$ npm install --save jal
```

### Bower
```sh
$ bower install --save jal
```

## Getting started

### npm

```sh
$ npm install jal
```

```js
//Then require it into any module.

var jal = require('jal');

var linkedList = new jal.SingleLinkedList();
linkedlist.add(1);
```

### Browser

To use jal from a browser, download dist/jal.{version}.min.js or use a [bower](http://bower.io/search/?q=jal)

```sh
$ bower install jal
```

Then, add it as a script tag to your page:

```js
<script src="jal.min.js"></script>
<script>
  var linkedlist = new JAL.SingleLinkedList();
  linkedlist.add(2);
</script>
```

> If you're using browserify, the jal npm module also works from the browser.


## What's been implemented:
* <a href="https://cdn.rawgit.com/yashprit/jal/master/doc/html/Stack.html" target="_blank">Stack</a>
* <a href="https://cdn.rawgit.com/yashprit/jal/master/doc/html/SingleLinkedList.html" target="_blank">Single LinkedList</a>

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
[daviddmdev-image]: https://david-dm.org/yashprit/jal/dev-status.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/yashprit/jal
[bower-url]: http://bower.io/search/?q=owner:yashprit
[bower-image]: https://badge.fury.io/bo/jal@1x.png
