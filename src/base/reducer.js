import { combineReducers } from 'redux';
import {INCREMENT,DECREMENT} from './action';
// import undoable, { distinctState } from 'redux-undo'

function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            // 不更改传入state对象，而是返回一个新的变更后的对象
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

module.exports = combineReducers({
    counter
})
