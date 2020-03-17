import {takeLatest } from 'redux-saga/effects';
import { Types } from "../types";
import { addCommic } from './comics';

export default function* rootSaga() {
    yield takeLatest(Types.ADD_REQUEST, addCommic);
}
