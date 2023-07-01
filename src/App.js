import React, { useEffect, useState } from "react";

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
  }, [movieList]); //디펜더싱 배열 (의존성 배열)
  return <div className="App">{movieList.length === 0 ? "loading..." : "영화 불러오기 완료!"}</div>;
}

export default App;
