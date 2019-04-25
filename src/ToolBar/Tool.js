import React from 'react';
import './css/Tool.css';
export default class Tool extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={this.props.className}>
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