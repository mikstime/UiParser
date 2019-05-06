import React, {Fragment} from 'react';
import './css/about.sass';
import { connect } from "react-redux";
const mapStateToProps = state => {
    return { isToggleOn : state.isToggleOn, aboutId : state.id};
};
class About extends React.Component{

    constructor(props) {
        super(props);

    }
    render() {
        let style = "about-holder";
        style += (this.props.isToggleOn.isToggleOn && this.props.isToggleOn.aboutId === this.props.id)? "" : " about-holder-hidden";
        return(
            <div className={style}>
                    {this.props.textValue}
            </div>
        );
    }
}

export default connect(mapStateToProps)(About);