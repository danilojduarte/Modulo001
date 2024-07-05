import React from "react";

class App extends React.Component {
  // Metodo responsável por renderizar o conteúdo HTML do nosso componente;
  constructor() {
    super();
    this.nome = "Danilo Duarte";
  }

  render () {
      return (
        <div>
          <h1>Primeiro Projeto</h1>
    
          <h2>{this.nome}</h2>

          <p>Realizando teste</p>
        </div>
      );
    }
  }
  

export default App;
