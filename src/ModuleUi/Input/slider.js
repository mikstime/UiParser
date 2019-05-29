import React, {Fragment} from 'react'
import './css/slider.sass'
import './css/text.sass'
import {connect, ReactReduxContext} from "react-redux";
import {pickerUpdated} from "../../reduxLogic/ModuleUi/actions";

function mapDispatchToProps(dispatch, ownProps) {
    return {
        pickerUpdated: aboutObj => dispatch(pickerUpdated(aboutObj)),
    };
}
class SliderDefault extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.min = props.params[0] || 0;
        this.max = props.params[1] || 1;
        this.step = props.params[2] || 0.001;
    }
    updateValue = (value) => {
        const res = {...this.props.additionalData, value : Math.random()};
        this.props.pickerUpdated(res);
    }
    render() {
        console.log(this.props.params)
        const blockingStyle = this.props.needBlock ? 'input-block ' : '';
        return(
            <div className={blockingStyle + "input-default slider-holder"}>
                <input min={this.min}
                       max={this.max}
                       step={this.step}
                       className="slider"
                       type="range"
                       onChange={this.updateValue}/>
            </div>

        )
    }
}

SliderDefault = connect(null, mapDispatchToProps)(SliderDefault);
export default SliderDefault