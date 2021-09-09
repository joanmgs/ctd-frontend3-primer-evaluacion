//@ts-nocheck
import React from "react";
import "../styles/index.css";
import data from "./data.json";
import Options from "./Options";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      descripcion: "",
      opcionA: "",
      opcionB: "",
    };
  };

  componentDidMount () {
    this.setState({
      id: data[0].id,
      descripcion: data[this.state.id].historia,
      opcionA: data[this.state.id].opciones.a,
      opcionB: data[this.state.id].opciones.b,
    });
  };

  updateHistory = (event) => {
    if (parseInt(this.state.id) < 5) {
      console.log(`${parseInt(this.state.id)+1}${event.target.id}`);
      const sig = data.find( dato => dato["id"] === `${parseInt(this.state.id)+1}${event.target.id}`);
  
      this.setState({
        id: sig.id,
        descripcion: sig.historia,
        opcionA: sig.opciones.a,
        opcionB: sig.opciones.b,
      });
    } else {
      alert("fin de la historia");
    };
  };

  render() {
    return (
      <>
        <h1 className="historia">{this.state.descripcion}</h1>
        <div className="opciones">
          <Options opcionA={this.state.opcionA} opcionB={this.state.opcionB} updating={this.updateHistory}/>
        </div>
      </>
    );
  };
};
