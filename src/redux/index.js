import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from './user/userReducer';
import { cartReducer } from './cart/cartReducer';

import shopReducer from './shop/shop.reducer'
import directoryReducer from './directory/directory.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [ 'cart' ],
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
