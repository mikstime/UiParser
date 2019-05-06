//******************************************************************************
// Created by MBTSKY on 2019-05-02.
//******************************************************************************

import { createStore } from "redux";
import rootReducer from "./reducers";
const store = createStore(rootReducer);
export default store;