import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";


import "./styles/App.css";

class App extends React.Component {
  // Metodo responsável por renderizar o conteúdo HTML do nosso componente;
  render() {
    return (
      <>
      <Navbar />

      <section id="articles">
        <Article title="Exemplo" />
        <Article />
        <Article />
        <Article />
      </section>
      </>
    ) 
  }
}

export default App;
