import Regular from 'regularjs';
import AddTodo from '../container/addTodo';
import Footer from '../component/foot';
import VisibleTodoList from '../container/visibleTodoList';
import UndoRedo from '../container/undoredo'

const tpl = `
    <div>
        TodoList Demo
        <AddTodo />
        <VisibleTodoList />
        <UndoRedo />
        <Footer />
    </div>
`

module.exports = Regular.extend({
    template: tpl,
    name: 'TodoApp',
    config: function(){
        
    }
})