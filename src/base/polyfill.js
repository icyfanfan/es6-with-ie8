// for ie8
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

const Promise = require('es6-promise');

if (!window.Promise)
    window.Promise = Promise;


require('core-js/fn/array/from');
require('core-js/fn/array/find');
require('core-js/fn/object/assign');
require('core-js/fn/string/includes');
require('core-js/fn/string/starts-with');
require('core-js/fn/string/ends-with');

