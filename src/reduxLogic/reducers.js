//******************************************************************************
// Created by MBTSKY on 2019-05-02.
//******************************************************************************


import { TOGGLE_ABOUT } from "./actions-types";

const initialState = {
    isToggleOn : false
};
function rootReducer(state = initialState, action) {
    if (action.type === TOGGLE_ABOUT) {
        return Object.assign({}, state, {
            isToggleOn: action.payload
        });
    }
    return state;
}

export default rootReducer;