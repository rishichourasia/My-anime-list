import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnimeList from './AnimeList'

function App() {
  const [query, setQuery] = useState('')
  const [anime, setanime] = useState([])
  const [trending, settrending] = useState([])

  useEffect(() => {
    axios.get("https://api.jikan.moe/v3/top/anime/1/airing").then(res => {
    // console.log(res.data.top);
    setTimeout(() => {
      settrending(res.data.top);
    }, 1000); }).catch(err => {
      console.log(err);
    })
  },[])

  function FetchAnime (query){ 
    axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`).then(res => {
      // console.log(res.data.results);
     setanime(res.data.results);     
    }).catch(err => {
      console.log(err);
    })

  }
 function HandleSearch (e){
   e.preventDefault();
  // console.log(query);
  FetchAnime(query);
 }

  const checkValue = query.length > 0 ;
  const checkTrending = trending.length > 0 ;
  const checkAnime = anime.length > 0;

  return (
    <div className="App">
    <header>
      <h1 className="title">My<strong>Anime</strong>List</h1>
      </header>
      <div className="content-wrap">
        <main>
          <div className="main-head">
          <form className="search-box" onChange={HandleSearch} onSubmit={e => e.preventDefault()}>
          <input type="text" name="query" placeholder="Search your anime.." value={query} onChange={ e => setQuery(e.target.value)} />
        </form>
          </div>
          <div className="anime-list">
          {checkValue ? checkAnime ? anime.map(anime => (
                  <AnimeList anime={anime} key={anime.mal_id}/>
                )) : <h2>"loading Anime...</h2> : checkTrending ? trending.map(anime => (
                  <AnimeList anime={anime} key={anime.mal_id}/>
                )) : <h2>Loading Trending Anime... </h2> } 
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
 