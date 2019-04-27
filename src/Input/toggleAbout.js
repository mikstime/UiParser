//******************************************************************************
// Created by MBTSKY on 2019-04-27.
//******************************************************************************

import './css/about.sass';
import React from 'react';

export default class ToggleAbout extends React.Component{
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
        let style = !this.state.isToggleOn ? "about-toggle-off " : "";
        style += 'about-toggle';
        return (
            <div className={style} onClick={this.toggle}>?</div>
        );
    }

}