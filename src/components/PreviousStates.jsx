import React from "react";
import "../styles/index.css";

export default function PreviousStates(props) {
  return (
    <>
        <h3>Selección anterior: {props.historial[props.historial.length-1]}</h3>
        <h4>Opciones anteriores: </h4>
        <ul>
          {props.historial.map( (previousOne, index) => {
            return (<li key={previousOne+index}>{previousOne}</li>);
          })}
        </ul>
    </>
  );
};
