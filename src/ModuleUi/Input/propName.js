//******************************************************************************
// Created by MBTSKY on 2019-04-26.
//******************************************************************************
import React, {Fragment} from 'react';
import './css/propName.sass'
//******************************************************************************
// props :
//  textValue : text content
//  tags : b for bold
//******************************************************************************
export default class PropName extends React.Component{

    render() {

        const tags = this.props.tags || '';
        let styles = "prop-name";
        if(tags.includes('b'))
            styles += " prop-bold";
        if(tags.includes('h'))
            styles += " prop-high";

        return (
            <Fragment>
                <p className={styles}>
                    {
                        this.props.textValue
                    }
                </p>
            </Fragment>
        );
    }
}

