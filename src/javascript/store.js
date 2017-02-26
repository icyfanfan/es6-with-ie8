const thunkMiddleware = require('redux-thunk').default
// import thunkMiddleware from 'redux-thunk'
const createLogger = require('redux-logger')
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'

// const loggerMiddleware = createLogger();
module.exports = createStore(rootReducer,
    applyMiddleware(
        thunkMiddleware// 允许我们 dispatch() 函数
  )
)
