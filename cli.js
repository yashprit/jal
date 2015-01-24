#!/usr/bin/env node
'use strict';
var meow = require('meow');
var dataStructureInJavascript = require('./');

var cli = meow({
  help: [
    'Usage',
    '  data-structure-in-javascript <input>',
    '',
    'Example',
    '  data-structure-in-javascript Unicorn'
  ].join('\n')
});

dataStructureInJavascript(cli.input[0]);
