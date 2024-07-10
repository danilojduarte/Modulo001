import React from "react";
import { Counter } from "./components/Counter/Counter";


class App extends React.Component {
  constructor() {
    super();

    this.state = { showCounter: false }
  }

  render() {
    return (
    <div>
      <h1>Ciclo de Vida React</h1>

      <button onClick={() => {
        this.setState({ showCounter: !this.state.showCounter });
      }}
      >
        { this.state.showCounter ? 'Remover Contador' : 'Mostrar Contator' }
        </button>


        {this.state.showCounter ? <Counter /> : null}
    </div>
    );
  }
}

// PAUSA -> Montando o obsjeto - 35:15


export default App;