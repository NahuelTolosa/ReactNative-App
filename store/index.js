import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import CategoryReducer from './reducers/categories.reducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const RootReducer = combineReducers({
    categories: CategoryReducer,
    // products: ProductsReducer,
    // cart: CartReducer
})

export default createStore(RootReducer,composedEnhancer);