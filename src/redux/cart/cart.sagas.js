import { takeLatest, put, call, all } from 'redux-saga/effects';
import { SIGN_OUT_SUCCESS } from '../user/user.action.types';
import { clearCart } from './cart.actions';

export function* clearCartOnSignOut (){
	yield put(clearCart());
}

export function* onSignOutSuccess (){
	yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas (){
	yield all([ call(onSignOutSuccess) ]);
}
