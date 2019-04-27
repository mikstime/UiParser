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
        const styles = {};
        if(tags.includes('b'))
            styles['fontWeight'] = 'bold';
        if(tags.includes('h'))
            styles['fontSize'] = '28px';


        return (
            <Fragment>
                <p style={styles}className={"prop-name"}>
                    {
                        this.props.textValue
                    }
                </p>
            </Fragment>
        );
    }
}

