import React, {Fragment} from 'react';
import './css/about.sass';
export default class About extends React.Component{

    constructor(props) {
        super(props);

    }
    render() {
        let style = "about-holder";
        style += this.props.isShown ? "" : " about-holder-hidden";
        return(
            <div className={style}>
                    {this.props.textValue}
            </div>
        );
    }
}