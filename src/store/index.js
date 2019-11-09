import { applyMiddleware, compose, createStore } from 'redux';
import createRootReducer from './root';
import thunk from 'redux-thunk'

const initialState=[];
const enhancers = []

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window['__REDUX_DEVTOOLS_EXTENSION__']
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(thunk),
    ...enhancers,
)

const store = createStore(createRootReducer(),initialState,composedEnhancers)
export default store