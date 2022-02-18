import "./style.css";

export const Movies = (props) => {
  return (
    <div className="movie-container">
      {props.data.map((item) => (
        <div key={item.imdbID} className="movieCard">
          <img src={item.Poster} alt={item.Title} />
          <p>{item.Title}</p>
          <button>download</button>
        </div>
      ))}
    </div>
  );
};
