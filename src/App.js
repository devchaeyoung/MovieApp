import React, { useEffect } from "react";

function App() {
  const url = "https://yts.mx/api/v2/list_movies.json";

  async function getMovie() {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => data.data.movies);
  }
  useEffect(() => {
    getMovie();
  }, []); //디펜더싱 배열 (의존성 배열)
  return <div className="App"></div>;
}

export default App;
