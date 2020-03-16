export const Types = {
    ADD_REQUEST: 'comics/ADD_REQUEST',
    ADD_SUCCESS: 'comics/ADD_SUCCESS',
    ADD_FAILURE: 'comics/ADD_FAILURE',
};

export const Creators = {
    addComicsRequest: () => ({
        type: Types.ADD_REQUEST,
        payload: {},
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
