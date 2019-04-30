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
//@TODO block input on accept click
const constructors = {
    "input/text" : TextInput,
    "input/slider" : SliderDefault,
    "input/check" : CheckInput
}

//******************************************************************************
// Descriptor format :
//  picker : [chosen constructor name, ...params] (or empty if not needed)
//  propName : name of the property
//  about : description of the property (or nothing)
//******************************************************************************
export default class PropHolder extends React.Component{

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
                <div className={"apply-name-holder"}>
                {needAbout ?
                    <ToggleAbout
                    onToggle={this.onAboutToggle}
                    /> :
                    <div
                        style={
                            {
                                width : '14px'
                            }
                        }
                    />
                }
                <PropName
                    textValue={desc.propName[0]}
                    tags={desc.propName[1] || ""}
                />
                </div>
                <Picker needBlock={this.props.needBlock}/>
                {needAbout && <About
                    isShown={this.state.aboutShown}
                    textValue={desc.about}/>
                }
            </div>
        );
    }
}