//******************************************************************************
// Created by MBTSKY on 2019-04-30.
//******************************************************************************
import pickerList from './Input/pickerList';
import React, {Fragment} from 'react';
// React component for storing property name
import PropName from './Input/propName';
import About from "./Input/about";
import ToggleAbout from "./Input/toggleAbout";

import uuid from 'uuid/v4'
import PropHolderRecursive from "./PropHolderRecursive";

export default class PropBlock extends React.Component{

    constructor(props) {
        super(props);
        this.initProps = this.initProps.bind(this);
        //this.organizePropHolder = this.organizePropHolder.bind(this);
        this.generatePropName = this.generatePropName.bind(this);
        this.generateAbout = this.generateAbout.bind(this);
        this.generatePicker = this.generatePicker.bind(this);
        // this.state = {domToRender : this.initProps(props.descriptor)};
    }
    //*************************************************************************
    // Descriptor format :
    //  propName : Array that contains prop name and attributes
    //   or string with a prop name
    //  about : property description for user (optionally)
    //  UiConstructor : descriptor in same format (optionally)
    //  picker : ui element used for picking value (optionally)
    //*************************************************************************
    initProps(Descriptor) {
        if(Descriptor instanceof Array) {
            let organizedHolder = [];
            for(let desc of Descriptor)
                organizedHolder.push(this.initProps(desc));
            return organizedHolder;
        } else {
            const PropName = this.generatePropName(Descriptor.propName);
            const About = this.generateAbout(Descriptor.about);
            const Picker = this.generatePicker(Descriptor.picker);
            const UiConstructor = Descriptor.UiConstructor;
            const parsedConstructor = typeof UiConstructor !== 'undefined' ?
                this.initProps(UiConstructor) : false;

            let organizedHolder = this.organizePropHolder(
                PropName,
                About,
                Picker,
                parsedConstructor
            );
            return organizedHolder;
        }
    }
    organizePropHolder(PropName, About, Picker, children) {
        //@TODO figure out the way of triggering about
        const AboutToggler = About[0].elem;
        const AboutShower = About[1].elem;
        return(
            <div key={uuid()}className={"prop-holder"}>
                <div className={"apply-name-holder"}>
                    <AboutToggler onToggle={()=>{}}/>
                    {PropName}
                </div>
                {Picker}
                <AboutShower/>
                {children}
            </div>)
    }
    generatePropName(propName) {
        let propNameToExport;
        if(typeof propName === 'string') {
            propNameToExport = <PropName textValue={propName}/>;
        } else if(propName instanceof Array) {

            const name = typeof propName[0] === 'string' ? propName[0] : false;
            const tags = typeof propName[1] === 'string' ? propName[1] : false;

            propNameToExport = <PropName textValue={name} tags={tags}/>
        } else {
            console.warn("Property name has inappropriate format");
            propNameToExport = <Fragment/>
        }
        return  propNameToExport;
    }
    generateAbout(about) {
        // first elem - toggle button
        // second elem - textHolder
        let aboutToExport = [];
        if(typeof about === 'string') {
            //@TODO add callback for showing about
            aboutToExport.push(
                {elem : ToggleAbout });
            aboutToExport.push({
                elem : About,
                textValue : about
            })

        } else {
            //console.warn("No about property was specified");
            aboutToExport.push({elem : React.Fragment,
                className : "about-no-toggle"});
            aboutToExport.push({elem : React.Fragment});
        }
        return aboutToExport;
    }
    generatePicker(picker) {
        //@TODO add on change Event binding
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
    render() {
        return(
            <Fragment>
                {<PropHolderRecursive descriptor={this.props.descriptor}/>}
            </Fragment>
        )
    }
}
