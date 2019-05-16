import React from 'react';
import './App.sass';

import Header from "./header/Header";

import ToolsHolder from "./ToolBar/ToolsHolder";
import PropBlock from './PropBlock';
class App extends React.Component {

    constructor() {
        super();
        this.onAccept = this.onAccept.bind(this);
        this.state = {needBlock : false}
    }
    onAccept() {
        this.setState((state) => ({needBlock : !state.needBlock}))
    }
    render() {
        const module = JSON.parse(this.props.descriptor);
        return (
            <div className="module-holder">

                <ToolsHolder onAccept={this.onAccept}/>
                <Header text={module.ModuleName}/>
                <PropBlock descriptor={module}/>
            </div>
        );
    }
}

export default App;
