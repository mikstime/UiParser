//******************************************************************************
// Created by MBTSKY on 2019-04-30.
//******************************************************************************

import TextInput from "./text";
import SliderDefault from "./slider";
import CheckInput from "./check";

//@TODO load constructors dynamically
const constructors = {
    "input/text" : TextInput,
    "input/slider" : SliderDefault,
    "input/check" : CheckInput
}
export default constructors;