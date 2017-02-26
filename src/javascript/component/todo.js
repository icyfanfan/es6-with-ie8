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
    name: 'Todo',
    config: function(){
        
    },
    onClick: function(){
        this.$emit('todo');
    }
})