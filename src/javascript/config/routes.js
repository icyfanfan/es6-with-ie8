
var Regular = require('regularjs'),

    Application = require('../module/app'),
    Counter = require('../module/counter');
    // RegularDemo = require('../module/todoApp1'),
    // AsyncApp = require('../module/asyncActionApp'),
    // Todo = require('../module/todoApp');


module.exports = {

    routes: {
        'app': {
            url: '',
            view: Application
        },
        'app.counter': {
            url: 'counter',
            view: Counter
        }
    }
}
