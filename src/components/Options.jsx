import React from "react";

export default function Options(props) {
    return (
      <>
        <div className="opcion">
          <button id="a" className="botones" onClick={props.updating}>
            A
          </button>
          <h2>{props.opcionA}</h2>
        </div>
        <div className="opcion">
          <button id="b" className="botones" onClick={props.updating}>
            B
          </button>
          <h2>{props.opcionB}</h2>
        </div>
      </>
    );
};
