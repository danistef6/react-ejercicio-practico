import { all, takeLatest } from 'redux-saga/effects';

import { Types as CommicsTypes } from '../actions/actions';
import { addCommic } from './comics';

export default function* rootSaga() {
    yield all([takeLatest(CommicsTypes.ADD_REQUEST, addCommic)]);
}
