//******************************************************************************
// Created by MBTSKY on 2019-04-27.
//******************************************************************************

import './css/about.sass';
import React from 'react';
import {toggleAbout} from "../reduxLogic/actions";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch, ownProps) {
    return {
        toggleAbout: aboutObj => dispatch(toggleAbout(aboutObj)),
    };
}
class ToggleAbout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
    }

    toggle = () => {
        this.setState((state) => ({isToggleOn: !state.isToggleOn}),
            () => this.onToggle(this.state.isToggleOn)
        )
    };
    onToggle = isToggleOn => {
        this.props.toggleAbout({isToggleOn, id : this.props.aboutId});
    };
    render() {
        let style = 'about-toggle ';
        style += this.state.isToggleOn ? "about-toggle-on " : "about-toggle-off ";
        return (
            <div
                className={style}
                onClick={this.toggle}>{this.state.isToggleOn? 'X' : '?'}</div>
        );
    }

}
ToggleAbout = connect(null, mapDispatchToProps)(ToggleAbout);
export default ToggleAbout;