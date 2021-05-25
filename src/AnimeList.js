import React from 'react'

function AnimeList(props) {
    return ( 
             <article className="anime-card">
                      <a 
                      className="anchor-tag"
                        href={props.anime.url} 
                        target="_blank" 
                        rel="noreferrer">
                      <figure>
                          <img 
                            src={props.anime.image_url}
                            alt="anime" />
                       </figure>
                        <h3>{ props.anime.title }</h3>
                      </a>
               </article>      
    )
}

export default AnimeList
