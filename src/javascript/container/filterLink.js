import {setVisibilityFilter} from '../action';
import Base from './base';
var Link = require('../component/link');

const tpl = `
    <Link active={active} on-linkClick={this.onLinkClick($event)} children={text}></Link>
`

module.exports = Base.extend({
    template: tpl,
    name: 'FilterLink',
    config: function(){
        this.mapStateToData(this.__reduxStore.getState(),this.data);
        
        this.__reduxStore.subscribe(this.onChange.bind(this));
    },
    init: function(){
        this.$body();
    },
    onLinkClick: function(filter){
        this.__reduxStore.dispatch(setVisibilityFilter(this.data.filter));
    },
    onChange: function(){
        this.mapStateToData(this.__reduxStore.getState(),this.data);
    },
    mapStateToData: function(state,ownData){
        this.data.active = (ownData.filter == state.visibilityFilter);
    }
    
})
