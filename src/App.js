import React from 'react';
import './App.css';

import ToolsHolder from "./ToolBar/ToolsHolder";
import TextInput from "./Input/text";
import Header from "./header/Header";
import uuidv4 from 'uuid/v4';
import SliderDefault from "./Input/slider";
import CheckInput from "./Input/check";
const constructors = {
    "input/text" : TextInput,
    "input/slider" : SliderDefault,
    "input/check" : CheckInput
}
class App extends React.Component {

    render() {
        const module = JSON.parse(this.props.descriptor);
        const fr = [];
        for(let prop of module.constructor) {
            //@TODO change this
            let ChosenEl = constructors[prop.prototype.toLowerCase()];
            fr.push(<ChosenEl key={uuidv4()}name={prop.textValue}/>);
        }
        return (
            <div className="module-holder">

                <ToolsHolder/>
                <Header text={module.ModuleName}/>
                {fr}
            </div>
        );
    }
}

export default App;
