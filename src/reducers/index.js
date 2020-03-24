import { combineReducers } from 'redux';

import comics from './reducers';
import details from './reducersDetail';

export default combineReducers({
    comics,
    details
});
