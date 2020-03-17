import {Types} from "../types";

const INITIAL_STATE = {
    data: [],
    limit: 50,
    offset: 0,
    name: " "
};

export default function reducers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_REQUEST:
            return { ...state,
                     name: action.payload.name};

        case Types.ADD_SUCCESS:
            return {
                ...state,
                offset: state.offset + state.limit,
                data: [...state.data, ...action.payload.data.results],
            };
        case Types.ADD_FAILURE:
            return { ...state };

        default:
            return state;
    }
}