function MovieItem({ cover, title, rating, runtime, genres, summary }) {
  return (
    <div className="movie-item">
      <div className="movie-cover">
        <img src={cover} alt={title} />
      </div>
      <div className="movie-title">{title}</div>
      <div className="movie-summary">{summary}</div>
    </div>
  );
}

export default MovieItem;
