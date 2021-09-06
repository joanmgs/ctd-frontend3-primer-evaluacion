import React from "react";
import "../styles/index.css";
import data from "./data.json";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descripcion: "",
      opcionA: "",
      opcionB: "",
    };
  }



  render() {
    return (
      <>
        <h1 className="historia">Descripcion</h1>
        <div className="opciones">
          <div className="opcion">
            <button id="A" className="botones">
              A
            </button>
            <h2>Descripcion opcion A</h2>
          </div>
          <div className="opcion">
            <button id="B" className="botones">
              B
            </button>
            <h2>Descripcion opcion B</h2>
          </div>
        </div>
      </>
    );
  }
}
