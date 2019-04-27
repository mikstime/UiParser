import React, {Component} from 'react';
// Base class
import Tool from './Tool.js';
// custom styles for element
import './css/Apply.css'
// image to show as an icon
import img from './svg/check.svg'
export default class Apply extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Tool
                src={img}
                className="Apply"
                alt="V"
            />
        );
    }
}