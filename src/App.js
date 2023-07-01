import React, { useEffect } from "react";
import { getMovie } from "./api/movie";

function App() {
  useEffect(() => {
    getMovie();
  }, []); //디펜더싱 배열 (의존성 배열)
  return <div className="App"></div>;
}

export default App;
