import {toggleTodo} from '../action';
import Base from './base';
var TodoList = require('../component/todoList');

const tpl = `
    <TodoList todoList={todoList} on-todoList={this.onTodoListClick($event)}></TodoList>
`

const getVisiableList = function(todos,filter){
    switch(filter){
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
};

module.exports = Base.extend({
    template: tpl,
    name: 'VisibleTodoList',
    config: function(){
        this.mapStateToData(this.__reduxStore.getState())
        
        this.__reduxStore.subscribe(this.onChange.bind(this));
    },
    onTodoListClick: function(index){
        this.__reduxStore.dispatch(toggleTodo(index));
    },
    onChange: function(){
        this.mapStateToData(this.__reduxStore.getState())
    },
    mapStateToData: function(state){
        this.data.todoList = getVisiableList(state.todos.present,state.visibilityFilter)
    }  
    
})
