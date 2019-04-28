import React, {Fragment} from 'react'
import './css/text.sass'
import './css/input-default.sass'
export default class TextInput extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        //@TODO refactor
        //@TODO add about info
        //@TODO make about toggleable
        //@TODO replace css with sass
        return(
            <React.Fragment>
                <input className="input-default text-input" type="text"/>
            </React.Fragment>
        )
    }
}