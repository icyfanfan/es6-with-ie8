import Regular from 'regularjs';
import FilterLink from '../container/filterlink';

const tpl = `
    <p>
    Show:

    <FilterLink filter="SHOW_ALL" text='All'>
      
    </FilterLink>
    , 
    <FilterLink filter="SHOW_ACTIVE" text='Active'>
      
    </FilterLink>
    ,
    <FilterLink filter="SHOW_COMPLETED" text='Completed'>
      
    </FilterLink>
  </p>
`

module.exports = Regular.extend({
    template: tpl,
    name: 'Footer',
    config: function(){
        
    }
})