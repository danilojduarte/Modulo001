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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero unde, neque natus nemo quos ipsa rerum molestias esse quod. Doloremque dicta, quo officiis sint delectus tempore excepturi accusantium! Minima, nobis.</p>
        </div>
      </article>
    )
  }
}