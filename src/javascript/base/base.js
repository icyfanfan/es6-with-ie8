var Regular = require('regularjs');

module.exports = Regular.extend({

    config: function () {
        this.defaults({

        });
        this.supr();
    },

    /**
     * 设置this.data的默认值，不会覆盖已经存在的key
     * 
     * @param {object} _args
     */
    defaults: function (_args) {
        for (var _key in _args) {
            if (_args.hasOwnProperty(_key) && this.data[_key]===undefined) {
                this.data[_key] = _args[_key];
            }
        }
    }
    // baseFun: function(_processName,_option){
    //     var _state = this.$stateName || '';
    //     if(_state !== ''){
    //         console.log(_processName + ' Process for ' + _state + '; param: ' + JSON.stringify(_option.param));
    //     }
    // },
    /**
     * 公用enter方法
     * 
     * @param {object} _option
     */
    // enter: function(_option){
    //     return this.baseFun('enter',_option);
    // },

    /**
     * 公用leave方法
     * 
     * @param {object} _option
     */
    // leave: function(_option){
    //     return this.baseFun('leave',_option);         
    // },

    /**
     * 公用update方法
     * 
     * @param {any} _option
     * @returns
     */
    // update: function(_option){
    //     return this.baseFun('update',_option);
    // }

})