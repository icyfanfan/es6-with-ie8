import { ActionCreators as UndoActionCreators } from 'redux-undo'
import Base from './base';

const tpl = `
    <p>
        <button on-click={this.onUndo($event)} r-hide={!canUndo}>
        Undo
        </button>
        <button on-click={this.onRedo($event)} r-hide={!canRedo}>
        Redo
        </button>
    </p>
`

module.exports = Base.extend({
    template: tpl,
    name: 'UndoRedo',
    config: function(){
        this.mapStateToData();
        
        this.__reduxStore.subscribe(this.onChange.bind(this));

    },
    onUndo: function(e){
        // e.preventDefault();
        this.__reduxStore.dispatch(UndoActionCreators.undo())
    },
    onRedo: function(e){
        // e.preventDefault();
        this.__reduxStore.dispatch(UndoActionCreators.redo())
        
    },
    onChange: function(){
        this.mapStateToData();
    },
    mapStateToData: function(){
        var state = this.__reduxStore.getState();
        this.data.canUndo = state.todos.past.length>0;
        this.data.canRedo = state.todos.future.length>0;
    }

    
})
