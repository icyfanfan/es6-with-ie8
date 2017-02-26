import Regular from 'regularjs';
import Todo from './todo';

const tpl = `
    {#list todoList as todo}
        <Todo key={todo.id}
        text={todo.text}
        completed={todo.completed}
        on-todo = {this.onTodoClick(todo.id)}
        />
    {/list}
`

module.exports = Regular.extend({
    template: tpl,
    name: 'TodoList',
    config: function(){
    },
    onTodoClick: function(index){
        this.$emit('todoList',index);
    }
})