// 容器组件基类，传入store实例
import Store from '../store';
import Provider from '../base/provider';
import Regular from 'regularjs';

module.exports = Regular.extend({
    template:'',
    store: Store,
    config: function(){
    }
    
}).use(Provider);
