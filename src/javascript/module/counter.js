import {increment,decrement} from '../action.js'

const Base = require('../base/base');
const store = require('../store');

const tpl = `
<p>计数器</p>
<button on-click={this.onIncre($event)}>increment</button>
<button on-click={this.onDecre($event)}>decrement</button>
<h1>{counter}</h1>
`

module.exports = Base.extend({

    template: tpl,
    config: function(_data){
        store.subscribe(()=>{
            this.data.counter = store.getState().counter;
        });
        var test = {};
        Object.assign({},test,{a:1});
    },
    init: function(){
        
    },
    onIncre: function(){
        store.dispatch(increment());
    },
    onDecre: function(){
        store.dispatch(decrement());
    },
    changeView: function(){
        this.data.counter = store.getState().counter;
    }
})