//******************************************************************************
// Created by MBTSKY on 2019-05-01.
//******************************************************************************

import React, {Fragment} from 'react';
import uuid from 'uuid/v4'
import PropName from "./Input/propName";
import pickerList from "./Input/pickerList";
import ToggleAbout from "./Input/toggleAbout";
import About from "./Input/about";
export default class PropHolderRecursive extends React.Component{

    constructor(props) {
        super(props);
        // Store descriptor in state.
        this.state = {descriptor : props.descriptor}
    }
    validatePropName = propName => {
        if(propName instanceof Array) {
            // Array should have one or two elems in it.
            // Each of them is string.
            return 0 < propName.length &&
                propName.length <= 2 &&
                propName.reduce(
                    (p, c) => p += Number(typeof c === 'string'), 0
                ) === propName.length;
        } else if(typeof propName === 'string') {
            return true;
        }
        return false;
    };
    validateDescriptor = descriptor => {
        //@TODO add validation for other props
        const isValidPropName = this.validatePropName(descriptor.propName);
        return isValidPropName;
    };
    getPropNameNode = propName => {
        if(typeof propName === 'string') {
            return <PropName textValue={propName}/>
        } else if(propName instanceof Array) {
            return <PropName
                textValue={propName[0]}
                tags={propName[1] || ''}
            />
        }
        return <Fragment/>
    };
    getPropHolderNode = UiConstructor => {
        if(UiConstructor instanceof Array) {
            return UiConstructor.map( desc =>
                <PropHolderRecursive
                    key={uuid()}
                    descriptor={desc}
                />)
        } else if(UiConstructor instanceof Object) {
            return <PropHolderRecursive descriptor={UiConstructor}/>
        }
        return <Fragment/>
    };
    getPickerNode = picker => {
        let pickerToExport;
        if(picker instanceof Array) {
            const pickerSrc = typeof picker[0] === 'string' ?
                picker.splice(0,1)[0].toLowerCase() : '';
            const params = picker.filter(Number.isFinite);
            const  ChosenPicker = pickerSrc in pickerList ?
                pickerList[pickerSrc] : React.Fragment;
            pickerToExport = <ChosenPicker key={uuid()}/>;

        } else  if(typeof picker === 'string')  {
            const pickerSrc = picker.toLowerCase();

            const  ChosenPicker = pickerSrc in pickerList ?
                pickerList[pickerSrc] : React.Fragment;
            pickerToExport = <ChosenPicker/>;
        } else {
            //console.warn("Incorrect picker src was specified");
            pickerToExport = <Fragment/>;
        }
        return pickerToExport;
    }
    getAboutNode = about => {

        if(typeof about === 'string') {
            //@TODO add callback for showing about
            return <About textValue ={about}/>
        } else {
            return <Fragment/>;
        }
    }
    getToggleAboutNode = about => {
        if(typeof about === 'string') {
            //@TODO add callback for showing about
            return <ToggleAbout/>
        } else {
            return <div className="about-no-toggle"/>;
        }
    }
    render() {
        const descriptor = this.state.descriptor;
        console.log(descriptor)
        const propName = descriptor.propName;
        const picker = descriptor.picker;
        const about = descriptor.about;
        const childNodes = descriptor.UiConstructor;
        return (
            <div className="prop-holder">
                <div className={"apply-name-holder"}>
                    {this.getToggleAboutNode(about)}
                    {this.getPropNameNode(propName)}
                </div>
                {this.getPickerNode(picker)}
                {this.getAboutNode(about)}
                {this.getPropHolderNode(childNodes)}
            </div>
        )
    }

}