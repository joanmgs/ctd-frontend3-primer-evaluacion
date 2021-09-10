//@ts-nocheck
import React from "react";
import "../styles/index.css";
import data from "./data.json";
import Options from "./Options";
import PreviousStates from "./PreviousStates";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      descripcion: "",
      opcionA: "",
      opcionB: "",
      historial: [],
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

  updateOptions = (event) => {
    if (parseInt(this.state.id) < 5) {
      const opcionSeleccionada = data.find( dato => dato["id"] === `${parseInt(this.state.id)+1}${event.target.id}`);

      this.setState({
        id: opcionSeleccionada.id,
        descripcion: opcionSeleccionada.historia,
        opcionA: opcionSeleccionada.opciones.a,
        opcionB: opcionSeleccionada.opciones.b,
        historial: [...this.state.historial, `${event.target.id}`],
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
          <Options opcionA={this.state.opcionA} opcionB={this.state.opcionB} updating={this.updateOptions}/>
        </div>
        <div className="recordatorio">
          <PreviousStates historial={this.state.historial}/>
        </div>
      </>
    );
  };
};
