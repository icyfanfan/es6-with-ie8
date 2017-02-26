import Base from '../base/base';
import Store from '../store';
import {selectSubreddit,fetchPostsIfNeeded} from '../action';

const tpl = `
    <div>
        <p>异步获取数据Demo 打开console看log</p>
        <button on-click={this.getData($event)}>点我拿数据</button>
    </div>
`

module.exports = Base.extend({
    template: tpl,
    name: 'AsyncApp',
    store: Store,
    config (){
        
    },
    getData (){
        var store = this.store;
        // 先发一条ui获取数据的action
        store.dispatch(selectSubreddit('frontend'));
        // 这是实际获取数据的action，会返回一个Promise对象 demo这样简单写
        store.dispatch(fetchPostsIfNeeded('frontend')).then(() => {
            console.log(store.getState())
        });
    }
})