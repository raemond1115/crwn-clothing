import {all, call} from 'redux-saga/effects';

import { shopSagas} from './shop/shop.sagas';
import {userSaga} from './user/user.sagas';
import {cartSaga} from './cart/cart.saga';

export default function* rootSaga(){
    yield all([
        call(shopSagas),
        call(userSaga),
        call(cartSaga)
    ]) 
}