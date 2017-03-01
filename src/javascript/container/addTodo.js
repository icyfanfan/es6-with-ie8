import {addTodo} from '../action';
import Base from './base';
const tpl = `
    <form on-submit={this.onAdd($event)}>
        <input name='todo' type='text' r-model={value} />
        <button type='submit'>ADD</button>
    </form>
`

module.exports = Base.extend({
    template: tpl,
    name: 'AddTodo',
    config: function(){
    },
    onAdd: function(e){
        e.preventDefault();
        this.__reduxStore.dispatch(addTodo(this.data.value));
    }
    
})
