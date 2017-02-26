import Regular from 'regularjs';

const tpl = `
    <li
    r-style={{
    textDecoration: completed ? 'line-through' : 'none'
    }} on-click={this.onClick($event)}>
    {text}
    </li>
`
 
module.exports = Regular.extend({
    template: tpl,
    name: 'Todo1',
    config: function(){
        var outer = this.$outer;
        this.$outer.data._todos.push(this);
    },
    onClick: function(){
        // this.$emit('todo');
        this.data.completed = !this.data.completed;
        // this.$outer._completed
        this.$emit('todo',{
            sender: this,
            index: this.data.key
            
        });
        
    }
})