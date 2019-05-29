import React, {Fragment} from 'react'
import './css/text.sass'
import './css/input-default.sass'
import uuid from 'uuid/v4'

import {connect} from "react-redux";
import {pickerUpdated} from "../../reduxLogic/ModuleUi/actions";

function mapDispatchToProps(dispatch, ownProps) {
    return {
        pickerUpdated: pickerVal => dispatch(pickerUpdated(pickerVal)),
    };
}

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dataToExport : ''};
    }
    updateValue = (e) => {

        this.setState({dataToExport : e.target.value});
        const res = {...this.props.additionalData, value : e.target.value};
        this.props.pickerUpdated(res);
    };
    render() {
        const blockingStyle = this.props.needBlock ? 'input-block ' : '';
        return(
            <React.Fragment>
                <input
                    className={blockingStyle + "input-default text-input"}
                    type="text"
                    onChange={this.updateValue}/>

            </React.Fragment>
        )
    }
}

TextInput = connect(null, mapDispatchToProps)(TextInput);
export default TextInput