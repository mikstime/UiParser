import React, {Fragment} from 'react';
import './css/about.sass';
import { connect } from "react-redux";
const mapStateToProps = (state, ownProps) => {
    return {isToggleOn : state.toggledAbouts[ownProps.id]};
};
class About extends React.Component{

    constructor(props) {
        super(props);
    }
    render() {
        let style = "about-holder";
        style += this.props.isToggleOn ? "" : " about-holder-hidden";
        return(
            <div className={style}>
                    {this.props.textValue}
            </div>
        );
    }
}
About = connect(mapStateToProps)(About);
export default About;