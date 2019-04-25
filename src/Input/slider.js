import React, {Fragment} from 'react'
import './css/slider.css'
import './css/text.css'
export default class SliderDefault extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={{marginBottom:"5px"}}>
                <p className="text-name">{this.props.name}
                </p>
                <div className={"slider-holder"}>
                <input className="slider" type="range"/>
                </div>
                <br/>
            </div>
        )
    }
}