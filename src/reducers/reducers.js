import {Types} from "../types";
import immutable from "seamless-immutable";

const INITIAL_STATE = immutable({
    data: [],
    limit: 50,
    offset: 0,
    name: "",
    loading: false,
    error: "",
});

export default function reducers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_REQUEST:
return state.merge({
        error: '',
        fetching: true,
      })

        case Types.ADD_SUCCESS:
            console.log("redux1111 ",action.payload.data.data.results);
            return state.merge({
                error: '',
                fetching: false,
                data:action.payload.data.data.results
              })
        case Types.ADD_FAILURE:
            return state.merge({
                error: 'error',
                fetching: false
              })

        default:
            return state;
    }
}