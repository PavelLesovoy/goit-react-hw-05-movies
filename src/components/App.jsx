import Cast from './Cast/Cast';
import MovieDetails from './MovieDetails/MovieDetails';
import Reviews from './Reviews/Reviews';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import SharedLayout from './SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
