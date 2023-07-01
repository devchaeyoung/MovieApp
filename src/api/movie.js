const url = "https://yts.mx/api/v2/list_movies.json";

export function getMovie() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
