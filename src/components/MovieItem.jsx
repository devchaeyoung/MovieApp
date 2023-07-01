function MovieItem({ cover, title, rating, runtime, genres }) {
  return (
    <div className="movie-item">
      <div className="movie-cover">
        <img src={cover} alt={title} />
      </div>
      <div className="movie-info">
        <div className="movie-title">{title}</div>
        <div className="movie-rating">{rating}</div>
      </div>
    </div>
  );
}

export default MovieItem;
