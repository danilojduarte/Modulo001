import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import "./styles/App.css";

import article01 from "./assets/img/article-img-01.jpg";
import article02 from "./assets/img/article-img-02.jpg";
import article03 from "./assets/img/article-img-03.jpg";
import article04 from "./assets/img/article-img-04.jpg";

class App extends React.Component {
  // Metodo responsável por renderizar o conteúdo HTML do nosso componente;
  render() {
    return (
      <>
      <Navbar />

      <section id="articles">
        <Article title="O Começo..." 
        provider="HBO" 
        description="House of the Dragon: entenda a profecia que causou a guerra entre os Targaryen: - Aegon. O sonho dele. A Canção de Gelo e Fogo. É verdade, o que ele viu no Norte. O príncipe que foi prometido. O príncipe, para unir o Reino contra o frio e a escuridão, é você. É você quem deve fazer isso."
        thumbnail={article01}
        />

        <Article title="Historia Sobre as Familias"
        provider="HBO" 
        description="Os Brackens e os Blackwoods são uma das muitas famílias nobres de Westeros, o continente em que se passa House of the Dragon e (a maior parte de) Game of Thrones. Elas não estão entre as mais importantes do reino, porém, mas são reconhecidas por sua influência e poder locais." 
        thumbnail={article02}
        />

        <Article title="Dragões"
        provider="HBO" 
        description="As criaturas, que representam o poder da dinastia prateada, são peças-chave na guerra entre Rheanyra (Emma D'Arcy) e Aegon II (Tom Glynn-Carney). Entre os principais nomes na Dança estão a lendária Vhagar, do time Verde e Caraxes, do Preto, mas além deles outros devem aparecer para somar forças em cada lado. Por isso, para acompanhar a história se torna fundamental conhecê-los e saber suas posições no jogo." 
        thumbnail={article03}
        />

        <Article title="A Rainha" 
        provider="HBO" 
        description="Rhaenyra Targaryen foi a filha mais velha do Rei Viserys I. Ela disputou o Trono de Ferro com seu meio-irmão mais novo, Aegon II, numa guerra civil que ficou conhecida como Dança dos Dragões. Foi casada duas vezes e mãe de cinco filhos, entres os quais Aegon e Viserys, sendo que ambos se tornaram reis após sua morte."
        thumbnail={article04}
        />

      </section>
      </>
    ) 
  }
}

export default App;
