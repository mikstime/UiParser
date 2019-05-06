//******************************************************************************
// Created by MBTSKY on 2019-04-27.
//******************************************************************************

import './css/about.sass';
import React from 'react';
class ToggleAbout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState((state) => ({isToggleOn: !state.isToggleOn}),
            () => this.props.onToggle(this.state.isToggleOn)
        )
    }

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
export default ToggleAbout;