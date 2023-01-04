import css from './MovieList.module.css';
const { useLocation, Link } = require('react-router-dom');

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            className={css.movie}
            to={'/movies/' + movie.id}
            state={{ from: location }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
