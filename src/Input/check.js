import React, {Fragment} from 'react'
import './css/text.css'
import './css/check.sass'
export default class CheckInput extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{marginBottom: "5px"}}>
                <label className="text-name">{this.props.name}</label>
                    <input className="styled-checkbox" type="checkbox"/>
                <br/>
            </div>
        )
    }
}