import React, {Component} from 'react';
// Base class
import Tool from './Tool.js';
// custom styles for element
import './css/Apply.sass'
// image to show as an icon
import img from './svg/check.svg'
export default class Apply extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn : false};
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState((state) => ({isToggleOn: !state.isToggleOn}),
            () => this.props.onToggle(this.state.isToggleOn)
        )
    }
    render() {
        return(
            <Tool onClick={this.toggle}
                src={img}
                className="Apply"
                alt="V"
            />
        );
    }
}