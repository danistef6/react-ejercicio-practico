import {takeLatest } from 'redux-saga/effects';
import { Types } from "../types";
import { addCommic } from './comics';
import { addDetail } from './detail';

export default function* rootSaga() {
    yield takeLatest(Types.ADD_REQUEST, addCommic);
    yield takeLatest(Types.ADD_REQUEST_D, addDetail);
}
