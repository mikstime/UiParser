import React, {Fragment} from 'react'
import './css/slider.sass'
import './css/text.sass'
import {connect} from "react-redux";
const mapStateToProps = state => {
    return { isToggleOn : state.isToggleOn, aboutId : state.id};
};
class SliderDefault extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    updateValue = (value) => {
        //@TODO export value from slider
        //@TODO not just random number
        console.log(value)
        //this.props.
    }
    render() {
        const blockingStyle = this.props.needBlock ? 'input-block ' : '';
        return(
            <div className={blockingStyle + "input-default slider-holder"}>
                <input className="slider" type="range" onChange={this.updateValue}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderDefault);