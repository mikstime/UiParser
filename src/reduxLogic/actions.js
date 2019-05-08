//******************************************************************************
// Created by MBTSKY on 2019-05-02.
//******************************************************************************

export function toggleAbout(payload) {
    return { type: "TOGGLE_ABOUT", payload }
}
export function exportValues(payload) {
    return { type : "EXPORT_VALUES", payload }
}