import React, { useEffect } from "react";
import { getMovie } from "./api/movie";

function App() {
  useEffect(() => {
    getMovie();
  }, []);
  return <div className="App"></div>;
}

export default App;
//여기까지 api, Hook
