import { getMovieDetails } from 'pages/API';
import css from './MovieDetails.module.css';
const { useEffect, Suspense } = require('react');
const { useState } = require('react');
const { useParams, useLocation, Outlet, Link } = require('react-router-dom');

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState();
  const backLinkHref = location.state?.from ?? './movies';

  useEffect(() => {
    async function getMovie() {
      const fetchResult = await getMovieDetails(id);
      setMovieDetails(fetchResult);
    }
    getMovie();
  }, [id]);

  if (movieDetails) {
    return (
      <>
        <Link className={css.btnBack} to={backLinkHref}>
          Go Back
        </Link>
        <div className={css.movieDetails}>
          <img
            className={css.moviePoster}
            src={'https://image.tmdb.org/t/p/w500/' + movieDetails.poster_path}
            alt="movie poster"
          />
          <div className={css.movieInfo}>
            <h1>{movieDetails.original_title}</h1>
            <p>User Score: {Math.ceil(movieDetails.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h2>Ganres</h2>
            <p>
              {movieDetails.genres.map(
                ({ name }, i) =>
                  name + (i !== movieDetails.genres.length - 1 ? ', ' : '')
              )}
            </p>
          </div>
        </div>
        <div className={css.container}>
          <h3>Additional information</h3>
          <Link
            to={'cast'}
            className={css.infoBtn}
            state={{ from: location.state?.from }}
          >
            Cast
          </Link>
          <Link
            to={'reviews'}
            className={css.infoBtn}
            state={{ from: location.state?.from }}
          >
            Reviews
          </Link>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    );
  }
};

export default MovieDetails;
