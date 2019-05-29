import React, {Fragment} from 'react'
import './css/Header.sass'
export default class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Fragment>
                <h1>{this.props.text}</h1>
            </Fragment>
        )
    }
}