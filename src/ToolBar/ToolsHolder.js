import React from 'react';
import Apply from "./Apply";
import Decline from './Decline';
import './css/ToolsHolder.css';
import Tool from "./Tool";
import settingIcon from "./svg/Setting.svg"
export default
class ToolsHolder extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="tools-holder">
                <Apply/>
                <Decline/>
                <Tool src={settingIcon}/>
            </div>
        )
    }
}