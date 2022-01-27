import {combineReducers,createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './reducers/ProductReducer';

const enhancers=[applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()];

const rootReducer=combineReducers({allProducts:productsReducer});

const store=createStore(rootReducer,compose(...enhancers));

export default store;