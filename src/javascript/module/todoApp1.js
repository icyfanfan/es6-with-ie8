import Base from '../base/base';
import Store from '../store';
import StoreProvider from '../base/StoreProvider';
import TodoListContainer from '../container/todoListContainer';
import addTodo from '../container/addTodo';
const tpl = `
    <div>
        TodoList Demo2 两个同步状态的TodoList 共用一份state数据
        <StoreProvider store={store}>
        <p>可ADD,TOOGLE</p>
        <AddTodo />
        <TodoListContainer />
        <p>仅可TOOGLE</p>        
        <TodoListContainer />
        </StoreProvider>
    </div>
`

module.exports = Base.extend({
    template: tpl,
    name: 'TodoApp1',
    config: function(){
        this.defaults ({
            store:Store
        });
    }
})