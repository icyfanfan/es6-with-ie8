import Base from '../base/base';

import Todo from './todo';

const tpl = `
    {#inc this.$body}
`

module.exports = Base.extend({
    template: tpl,
    name: 'TodoList1',
    config: function(){
        this.defaults({
            _todos: []
        });
        // this.watch();
    },
    // watch() {
    //     this.$watch('_todos', (newValue, oldValue) => {
            
             
    //         this.$emit('change', {
    //             sender: this
    //         });
    //     });

    // },

})