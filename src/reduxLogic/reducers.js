//******************************************************************************
// Created by MBTSKY on 2019-05-02.
//******************************************************************************


import { TOGGLE_ABOUT, EXPORT_VALUES } from "./actions-types";

const initialState = {
    isToggleOn : false
};
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_ABOUT : return Object.assign({}, state, {
            isToggleOn: action.payload
        });
        case EXPORT_VALUES : return Object.assign({}, state);
        default: return state;
    }

}

export default rootReducer;