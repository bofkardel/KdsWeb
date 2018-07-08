import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux'
import {
    createLogger
} from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
// import orgReducer from './org/orgReducers';
import userReducer from './user/userReducers';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware)
if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
        collapsed: true
    });
    middlewares.push(logger);
}
const rootReducer = combineReducers({
    // orgReducer,
    userReducer
});
const finalCreateStore = applyMiddleware(...middlewares)(createStore);
const store = finalCreateStore(rootReducer);
sagaMiddleware.run(rootSaga);

export default store;