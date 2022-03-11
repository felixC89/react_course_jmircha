import React, { Component } from "react";

function EstadoHijo(props) {
  return (
    <div>
      <p>Contador hijo</p>
      <h3>{props.contadorhijo}</h3>
    </div>
  );
}

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };

    setInterval(() => {
      this.setState({
        contador: this.state.contador + 1
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h2>The State</h2>
        <p>{this.state.contador}</p>
        <hr />
        <p>
          <EstadoHijo contadorhijo={this.state.contador} />
        </p>
      </div>
    );
  }
}
