//******************************************************************************
// Created by MBTSKY on 2019-05-17.
//******************************************************************************


import React from 'react';
import ModuleList from './ModuleList'
import ModuleModal from './ModuleModal'
class App extends React.Component {

    render() {
        return (
            <div>
                <ModuleList/>
                <ModuleModal descriptor={this.props.descriptor}/>
            </div>
        );
    }
}

export default App;