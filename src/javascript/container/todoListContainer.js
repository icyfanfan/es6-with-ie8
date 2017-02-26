import Regular from 'regularjs';
import Base from '../base/base';
import TodoList1 from '../component/todoList1';
import Todo1 from '../component/todo1';
import {toggleTodo} from '../action';

/**
 * 作为TodoList的顶层组件使用
 */

const tpl = `
    <div>
        <TodoList1>
            {#list todoList as todo}
            <Todo1 text={todo.text} 
            key={todo.id} 
            completed={todo.completed} on-todo={this.onTodo($event)}/>
            {/list}
        </TodoList1>
    </div>

`

module.exports = Base.extend({
    template: tpl,
    name: 'TodoListContainer',
    $$isActionDispatcher: true,
    $$isDataFetcher: true,
    config (){
        this.defaults ({
            todoList:[]
        });
    },
    onTodo (e){
        this.$dispatch(toggleTodo(e.index))
    },
    mapState (state){
        this.data.todoList = state.todos.present;
    }

})

