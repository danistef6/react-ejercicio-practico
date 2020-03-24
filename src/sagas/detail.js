import { call, put } from 'redux-saga/effects';
import api from '../services/api';
import { publicKey, hash, ts } from '../config/config';
import { addDetailFailure,addDetailSuccess } from '../actions/actionsDetail';


export function* addDetail({payload}) {
    try {
        console.log('ingreso *******',payload);
      const resultOffers = yield call(api.get,
        `/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&id=${payload}`,)
      yield put(addDetailSuccess(resultOffers))
  
    } catch (err) {
      const error = err.response
      yield put(addDetailFailure(error))
   
    }
  }