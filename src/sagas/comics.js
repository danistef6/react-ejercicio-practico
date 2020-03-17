import { call, select, put } from 'redux-saga/effects';
import api from '../services/api';
import { publicKey, hash, ts } from '../config/config';
import { addComicsFailure,addComicsSuccess } from '../actions/actions';


export function* addCommic({payload}) {
    try {
        console.log('ingreso *******',payload);
      const resultOffers = yield call(api.get,
        `/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&offset=${0}&limit=${50}&nameStartsWith=${payload}`,)
      yield put(addComicsSuccess(resultOffers))
  
    } catch (err) {
      const error = err.response
      yield put(addComicsFailure(error))
   
    }
  }


/*export function* addCommic() {
    const {
        comics: { offset, limit , name},
    } = yield select();
    const teste = yield select();
    try {
        const {
            data: { data },
        } = yield call(
            api.get,
            `/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&offset=${offset}&limit=${limit}&nameStartsWith=${name}`,
        );
        yield put(addComicsSuccess(data));
    } catch (error) {
        yield put(
            addComicsFailure({
                publicKey,
                hash,
                ts,
                teste,
            }),
        );
    }
}*/
