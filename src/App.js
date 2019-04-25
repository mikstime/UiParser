import React from 'react';
import './App.css';
import './Input/text'
import ToolsHolder from "./ToolBar/ToolsHolder";
import TextInput from "./Input/text";
import Header from "./header/Header";
import SliderDefault from "./Input/slider";
import CheckInput from "./Input/check";

function App() {
  return (
    <div className="module-holder">
        <ToolsHolder/>
        <Header text={"Module Name"}/>
        <TextInput name={"Test Property"}/>
        <SliderDefault name={"Test Slider"}/>
        <CheckInput name={"Test Checkbox"}/>
    </div>
  );
}

export default App;
