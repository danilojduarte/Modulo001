import React from "react";


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
    </div>
    );
  }
}


export default App;