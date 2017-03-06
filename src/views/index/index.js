// 入口
require('base/polyfill');
import './test.mcss';

const Regular = require('regularjs');
const routeConfig = require('base/routes');
const restate = require( 'regular-state' );


console.log('notest123456789')
routeConfig.view = document.body;
routeConfig.Component = Regular
const router = restate( routeConfig );

router.start({html5: false, view: document.body});

// 简单使用
// var Counter = require('./module/counter');

// var com = new Counter();

// com.$inject(document.body);