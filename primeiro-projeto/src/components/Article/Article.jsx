import React from "react";

import ArticleImg from "../../assets/img/article-img-01.jpg";

import "./styles.css";


export class Article extends React.Component {
  render () {
    return (
      <article id="article">
        <img src={ArticleImg} alt="Imagem de Damon e Ranira" />

        <div className="article-infos">
          <h2>House Of Dragon</h2>
          <h3>TechInf</h3>
          <p>Os apoiadores de Aegon Targaryen entram em conflito com os adeptos de sua meia-irmã, Rhaenyra, pelo trono de Viserys I, seu falecido pai, iniciando uma guerra civil cerca de 200 anos antes dos eventos retratados em "Game of Thrones".</p>
        </div>
      </article>
    )
  }
}