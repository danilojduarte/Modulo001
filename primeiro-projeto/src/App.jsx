import React from "react";

class App extends React.Component {
  // Metodo responsável por renderizar o conteúdo HTML do nosso componente;
  render () {
      return (
       <header>
        <nav id="navbar">
          <div className="nav-brand">
            <img src="" alt="" />
            <h1>Space Flight News</h1>
          </div>
          <ul className="nav0list">
            <li><a href="/">Home</a></li>
            <li><a href="/">Trending</a></li>
            <li><a href="/">Categories</a></li>
            <li><a href="/">About us</a></li>
          </ul>
        </nav>
       </header>
      );
    }
  }
  

export default App;
