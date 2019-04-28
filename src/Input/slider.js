import React, {Fragment} from 'react'
import './css/slider.sass'
import './css/text.sass'
export default class SliderDefault extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={"input-default slider-holder"}>
                <input className="slider" type="range"/>
            </div>
        )
    }
}