import React from 'react';
import './css/Tool.sass';
export default class Tool extends React.Component{
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={this.props.className}
                 onClick={this.props.onClick}>
                <div className={"Tool-body"}>
                    <div className="Mask">
                        <img className="Tool-img"
                             src={this.props.src}
                             alt={this.props.alt}
                        />
                    </div>
                </div>
            </div>
        )
    }
}