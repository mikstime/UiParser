//******************************************************************************
// Created by MBTSKY on 2019-04-30.
//******************************************************************************

import React from 'react';
// React component for storing property name
import PropHolderRecursive from "./PropHolderRecursive";

export default class PropBlock extends React.Component{

    //*************************************************************************
    // Descriptor format :
    //  propName : Array that contains prop name and attributes (or only name)
    //   or string with a prop name
    //  about : property description for user (optionally)
    //  UiConstructor : descriptor in same format (optionally)
    //  picker : src to UI element used for picking value (optionally)
    //  e.g. ["input/text"]
    //*************************************************************************
    render() {
        //@TODO fix styles
        return(
            <div className="prop-block">
                {<PropHolderRecursive
                    descriptor={this.props.descriptor.UiConstructor}/>}
            </div>
        )
    }
}
