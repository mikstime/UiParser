//******************************************************************************
// Created by MBTSKY on 2019-05-02.
//******************************************************************************


import { TOGGLE_ABOUT, EXPORT_VALUES, PICKER_UPDATED } from "./actions-types";

const initialState = {
    toggledAbouts : {},
    pickersData : {}
};
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_ABOUT : return toggleAboutReducer(state, action);
        case EXPORT_VALUES : return exportValues(state, action);
        case PICKER_UPDATED : pickerUpdated(state, action);
        default: return state;
    }

}
function toggleAboutReducer(state, action) {
    const newState = Object.assign({}, state);
    newState.toggledAbouts[action.payload.id] = action.payload.isToggleOn;
    return newState
}
function pickerUpdated (state, action) {
    const newState = {...state};
    const data = {...action.payload};
    const id = data.id;
    delete data.id;
    newState.pickersData[id] = data;
    console.log(newState);
    return newState;
}
function exportValues(state, action) {
    console.log(state.pickersData);
    return state;
}
export default rootReducer;