import React, { useEffect, useState } from "react";
import MovieItem from "./components/MovieItem";

function App() {
  const [movieList, setMovieList] = useState([]);
  const url = "https://yts.mx/api/v2/list_movies.json";

  function getMovie() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovieList(data.data.movies));
  }
  useEffect(() => {
    getMovie();
  }, []); //디펜더싱 배열 (의존성 배열)
  useEffect(() => {
    console.log(movieList[0].runtime);
  }, [movieList]);
  return (
    <div className="App">
      {movieList.length === 0 ? (
        "loading..."
      ) : (
        <MovieItem
          cover={movieList[1].medium_cover_image}
          title={movieList[1].title}
          rating={movieList[1].rating}
          runtime={movieList[1].runtime}
          genres={movieList[1].genres}
          summary={movieList[1].summary}
        />
      )}
    </div>
  );
}

export default App;
