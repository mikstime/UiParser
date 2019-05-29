//******************************************************************************
// Created by MBTSKY on 2019-05-17.
//******************************************************************************

import React from 'react';
import {connect} from 'react-redux'
import {showModal} from "../reduxLogic/StartPage/actions";
import uuid from 'uuid/v4'
const mapDispatchToProps = (dispatch, ownProps) => {
    return  {
        showModal :  params => dispatch(showModal(params))
    }
}
const mapStateToProps = (state, ownProps) => {
    return {caller : state.modal.caller};
};
class ModuleItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {modalShown : false, id : uuid()};
    }
    loadModal = (evt) => {
        const posX = evt.clientX + 1;
        const posY = evt.clientY + 1;
        this.setState((state) => ({
            modalShown : !state.modalShown
        }),
            () => (
                this.props.showModal({
                    posX, posY, isShown : this.state.modalShown,
                    caller : this.state.id
                })
            )
        )
    };
    render() {
        const descriptor = this.props.descriptor;
        const moduleName = descriptor.moduleName || '';
        const modalShown = this.state.modalShown
            && (this.props.caller === this.state.id);
        //@TODO remove tag shown if caller id is different from modal
        const editStyle = "edit " + (modalShown ? "shown" : "");
        return (
            <li className="module-item">
                <div className="name">
                    <p>
                        {moduleName}
                    </p>
                </div>
                <div className={editStyle} onClick={this.loadModal}>
                </div>
            </li>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModuleItem);