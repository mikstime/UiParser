import React from 'react';
import Apply from "./Apply";
import Decline from './Decline';
import './css/ToolsHolder.sass';
import Tool from "./Tool";
import settingIcon from "./svg/Setting.svg"
export default
class ToolsHolder extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.onAcceptToggle = this.onAcceptToggle.bind(this)
    }
    onAcceptToggle(isToggleOn) {
        if(typeof this.props.onAccept === 'function')
            this.props.onAccept();
    }
    render() {
        return(
            <div className="tools-holder">
                <Apply onToggle={this.onAcceptToggle}/>
                <Decline/>
                <Tool src={settingIcon}/>
            </div>
        )
    }
}