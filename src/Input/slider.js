import React, {Fragment} from 'react'
import './css/slider.sass'
import './css/text.sass'
export default class SliderDefault extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        const blockingStyle = this.props.needBlock ? 'input-block ' : '';
        return(
            <div className={blockingStyle + "input-default slider-holder"}>
                <input className="slider" type="range"/>
            </div>
        )
    }
}