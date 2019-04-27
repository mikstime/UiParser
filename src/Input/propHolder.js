//******************************************************************************
// Created by MBTSKY on 2019-04-26.
//******************************************************************************
import React from 'react';
import './css/propHolder.sass'

import TextInput from "./text";
import SliderDefault from "./slider";
import CheckInput from "./check";

import About from './about';
import PropName from './propName';
import ToggleAbout from "./toggleAbout";
//@TODO replace this with loadable constructors
const constructors = {
    "input/text" : TextInput,
    "input/slider" : SliderDefault,
    "input/check" : CheckInput
}
//******************************************************************************
// Descriptor format :
//  picker : [chosen constructor name, ... params] (or empty if not needed)
//  propName : name of the property
//  about : description of the property (or nothing)
//******************************************************************************
export default class PropHolder extends React.Component{
//@TODO align elems in vertically
    //@TODO fix input width
    //@TODO should make default input styles such as width and color
    //@TODO fix overflow bug when input is blocked by previous module description
    constructor(props) {
        super(props);
        this.state = {aboutShown : false};
        this.onAboutToggle = this.onAboutToggle.bind(this);
    }
    onAboutToggle(isToggleOn) {
        this.setState({aboutShown : isToggleOn})
    }
    render() {
        const desc = this.props.descriptor;
        // validate if picker presented
        const Picker = 'picker' in desc ?
            constructors[desc.picker[0].toLowerCase()] : React.Fragment;
        // validate if about property presented
        const needAbout =  'about' in desc;
        
        return (
            <div className={"prop-holder"}>
                {needAbout ?
                    <ToggleAbout
                    onToggle={this.onAboutToggle}
                    /> :
                    <div
                        style={
                            {
                                float : 'left',
                                height : '20px',
                                width : '20px'
                            }
                        }
                    />
                }
                <PropName
                    textValue={desc.propName[0]}
                    tags={desc.propName[1] || ""}
                />
                <Picker/>
                {needAbout && <About
                    isShown={this.state.aboutShown}
                    textValue={desc.about}/>
                }
            </div>
        );
    }
}