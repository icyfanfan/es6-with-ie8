// action定义封装
/*
 * action 类型
 */

// Counter demo
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
// Counter demo
export function increment(){
    return{type: INCREMENT};
}
export function decrement(){
    return{type: DECREMENT};
}

// export default XXX
// export{INCREMENT,DECREMENT,increment,decrement}

// var action = {
//     INCREMENT : 'INCREMENT',
//     DECREMENT : 'DECREMENT',
//     increment : function (){
//         return{type: INCREMENT};
//     },
//     decrement : function(){
//         return{type: DECREMENT};
//     }
// }

// module.exports = action;