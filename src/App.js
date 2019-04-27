import React from 'react';
import './App.sass';

import Header from "./header/Header";
import uuid from 'uuid/v4';

import ToolsHolder from "./ToolBar/ToolsHolder";
import PropHolder from "./Input/propHolder";
class App extends React.Component {

    render() {
        const module = JSON.parse(this.props.descriptor);
        const fr = [];
        for(let prop of module.constructor) {
            //@TODO change this
            fr.push(
                <PropHolder
                    key={uuid()}
                    descriptor={prop}
                />);
        }
        return (
            <div className="module-holder">

                <ToolsHolder/>
                <Header text={module.ModuleName}/>
                <div className={"prop-block"}>
                    {fr}
                </div>
            </div>
        );
    }
}

export default App;
