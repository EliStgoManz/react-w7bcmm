import React from "react";
import React,{Component} from "react";
import {render}from "react-dom";

import "./style.css";

function Mycomponent(){
  return <p>Hola este es mi primer componente en react </p> 

}

class MiCompoenteClase extends Component{
  render(){
    return <p>Hola soy un componente de clase </p>

  }

}


export default function App() {
  return (
    <div>
      <MiCompoenteClase/>
    </div>
  );
}
