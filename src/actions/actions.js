import {Types} from "../types";
export const Creators = {
    addComicsRequest: name => ({
        type: Types.ADD_REQUEST,
        payload: { name},
    }),

    addComicsSuccess: data => ({
        type: Types.ADD_SUCCESS,
        payload: { data },
    }),

    addComicsFailure: error => ({
        type: Types.ADD_FAILURE,
        payload: { error },
    }),
};
