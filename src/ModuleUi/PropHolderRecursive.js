//******************************************************************************
// Created by MBTSKY on 2019-05-01.
//******************************************************************************

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4'
import PropName from "./Input/propName";
import './css/PropHolder.sass'
//
import pickerList from "./Input/pickerList";
import ToggleAbout from "./Input/toggleAbout";
import About from "./Input/about";
import { connect } from "react-redux";
function mapDispatchToProps(dispatch, ownProps) {
    return {
    };
}
class PropHolderRecursive extends React.Component {

    constructor(props) {
        super(props);
        //this.id is used for authentication of this element
        this.id = uuid();
        //contains list of child propHolders for rendering them
        this.propHolders = [];
    }

    validatePropName = propName => {
        if (propName instanceof Array) {
            // Array should have one or two elems in it.
            // Each of them is string.
            return 0 < propName.length &&
                propName.length <= 2 &&
                propName.reduce(
                    (p, c) => p += Number(typeof c === 'string'), 0
                ) === propName.length;
        } else if (typeof propName === 'string') {
            return true;
        }
        return false;
    };

    getPropNameNode = propName => {
        if (typeof propName === 'string') {
            return <PropName textValue={propName}/>
        } else if (propName instanceof Array) {
            return <PropName
                textValue={propName[0]}
                tags={propName[1] || ''}
            />
        }
        return <Fragment/>
    };
    getPropHolderNode = UiConstructor => {
        const Node = connect(null, mapDispatchToProps)(PropHolderRecursive);
        if (UiConstructor instanceof Array) {
            this.propHolders = UiConstructor.map(desc =>
                <Node
                    inner={true}
                    key={uuid()}
                    descriptor={desc}
                />)
            return this.propHolders;
        } else if (UiConstructor instanceof Object) {
            this.propHolders = [(<Node key={uuid()} inner={true} descriptor={UiConstructor}/>)];
            return this.propHolders;
        }
        return <Fragment/>
    };
    getPickerNode = picker => {
        let pickerToExport;
        if (picker instanceof Array) {
            const pickerSrc = typeof picker[0] === 'string' ?
                picker.splice(0, 1)[0].toLowerCase() : '';
            const params = picker.filter(Number.isFinite);
            const ChosenPicker = pickerSrc in pickerList ?
                pickerList[pickerSrc] : React.Fragment;

            pickerToExport = <ChosenPicker
                key={uuid()}
                params={params}
                additionalData={
                    { id: this.id, propName: this.props.descriptor.propName }
                }/>;

        } else if (typeof picker === 'string') {
            const pickerSrc = picker.toLowerCase();

            const ChosenPicker = pickerSrc in pickerList ?
                pickerList[pickerSrc] : React.Fragment;

            pickerToExport = <ChosenPicker additionalData={
                {
                    id: this.id,
                    propName: this.props.descriptor.propName
                }
            }/>;
        } else {
            console.warn("Incorrect picker src was specified");
            pickerToExport = <Fragment/>;
        }
        return pickerToExport;
    };
    getAboutNode = about => {

        if (typeof about === 'string') {
            return <About id={this.id} textValue={about}/>
        } else {
            return <Fragment/>;
        }
    };
    getToggleAboutNode = about => {
        if (typeof about === 'string') {
            return <ToggleAbout aboutId={this.id}/>
        } else {
            return <div className="about-no-toggle"/>;
        }
    };

    render() {
        const descriptor = this.props.descriptor;
        const propName = descriptor.propName;
        const picker = descriptor.picker;
        const about = descriptor.about;
        const UiConstructor = descriptor instanceof Array ?
            descriptor : descriptor.UiConstructor;
        // Add margin-left for inner element
        const InnerStyle = this.props.inner ? 'inner' : '';
        return (
            <div className={"prop-holder " + InnerStyle}>
                {propName &&
                <div className={propName ? "apply-name-holder" : "no-name"}>
                    {this.getToggleAboutNode(about)}
                    {this.getPropNameNode(propName)}
                </div>}
                {this.getPickerNode(picker)}
                {this.getAboutNode(about)}
                {this.getPropHolderNode(UiConstructor)}
            </div>
        )
    }
}

PropHolderRecursive = connect(null, mapDispatchToProps)(PropHolderRecursive);
PropHolderRecursive.propTypes = {
    descriptor : PropTypes.exact({
        about : PropTypes.string
    })
};
export default PropHolderRecursive;