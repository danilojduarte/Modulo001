import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";

import "./styles/App.css";

class App extends React.Component {
  // Metodo responsável por renderizar o conteúdo HTML do nosso componente;
  render() {
    return <Navbar />;
  }
}

export default App;
