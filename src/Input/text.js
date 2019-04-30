import React, {Fragment} from 'react'
import './css/text.sass'
import './css/input-default.sass'
import uuid from 'uuid/v4'
export default class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dataToExport : ''};
        this.prepareDataToExport =  this.prepareDataToExport.bind(this)
        this.exportData = this.exportData.bind(this)
    }
    prepareDataToExport(event) {
        this.setState({
            dataToExport : event.target.value
        })
    }

    render() {
        const blockingStyle = this.props.needBlock ? 'input-block ' : '';
        return(
            <React.Fragment>
                <input
                    className={blockingStyle + "input-default text-input"}
                    type="text"
                    onChange={this.prepareDataToExport}/>
            </React.Fragment>
        )
    }
    exportData() {
        return this.state
    }
}