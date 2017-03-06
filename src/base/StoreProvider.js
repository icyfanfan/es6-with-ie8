const Regular = require('regularjs');
const StoreProvider = module.exports = Regular.extend({
    name: 'StoreProvider',
    template: '{#inc this.$body}',
    config (data){
        if(!data.store){
            throw Error('storeProvider 必须传入store');
        }
    },
    // 增加mapState的Promise支持
    modifyBodyComponent (component){
        let store = this.data.store;
        if(component.$$isDataFetcher){
            if(typeof component.mapState !== 'function'){
                console.error('必须有mapState方法');
            }
            var state = this.getState(store, component);
            component.mapState(state);
            let unsubscribe = store.subscribe((state)=>{
                if(component.$phase === 'destroyed') return;
                var state = this.getState(store, component);
                var returnValue = component.mapState(state);
                if(returnValue !== false) component.$update();

            });
            component.$on('$destroy',unsubscribe);
        }
        if(component.$$isActionDispatcher){
            component.data.$store = store;
            component.$dispatch = store.dispatch.bind(store);
        }
        
    },
    getState (store,component){
        return store.getState();
    }
})