import React, {Fragment} from 'react'
import './css/text.css'
export default class TextInput extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={{marginBottom:"5px"}}>
                <p className="text-name">{this.props.name}
                </p>
                <input className="text-input" type="text"/>
                <br/>
            </div>
        )
    }
}