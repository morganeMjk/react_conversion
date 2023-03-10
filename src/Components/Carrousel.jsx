import React, { useRef, useState } from 'react'

export default function Carrousel(props) {

  const { articles } = props;

  const [indexActuel, setIndexActuel] = useState(0);

  const [article, setArticle] = useState(articles[indexActuel]);

  console.log(indexActuel)


  const suivant = () => {
    console.log(indexActuel)
    if (!articles[indexActuel+1]) {
      setIndexActuel(0);
      console.log(indexActuel)

    } else {
      setIndexActuel(indexActuel+1);
      console.log(indexActuel)

    }
    setArticle(articles[indexActuel]);
    console.log(indexActuel)

  }

  const precedent = () => {
    console.log(indexActuel)

    if (!articles[indexActuel-1]) {
      setIndexActuel(articles.length-1);
      console.log(indexActuel)

    } else {
      setIndexActuel(indexActuel-1);
      console.log(indexActuel)

    }
    setArticle(articles[indexActuel]);
    console.log(indexActuel)

  }

  return (
    <div className='articles'>
      <button id="precedent" className='fleche' onClick={() => precedent()}>&lt;</button>
      <div className='articles' id="carrouselContent">
        <article className="articles__box">
          <i className={`fa-sharp fa-solid ${articles[indexActuel].icone} articles__box__logo`}></i>
          <div className="articles__box__texte">
            <h2 className="articles__box__texte__titre">{articles[indexActuel].titre}</h2>
            <p className="articles__box__texte__p">{articles[indexActuel].contenu}</p>
          </div>
        </article>
      </div>
      <button id="suivant" className='fleche' onClick={() => suivant()}>&gt;</button>
    </div>
  )
}