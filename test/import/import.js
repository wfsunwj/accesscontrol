"use strict";
// import AccessControl from '../../lib/AccessControl';
exports.__esModule = true;
// import { AccessControl } from '../../';
// import AccessControl from '../../';
// import { AccessControl } from '../../lib';
var _1 = require("../../");
// import AccessControl = require('../../');
console.log(_1.AccessControl);
var ac = new _1.AccessControl();
ac.grant('user').createAny('resource');
console.log(ac.getGrants());