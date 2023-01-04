import { SearchForm } from 'components/SearchFrom/SearchForm';
import { searchMovie } from './API';
const { lazy, useState, useEffect, Suspense } = require('react');
const { useSearchParams } = require('react-router-dom');

const MoviesList = lazy(() => import('components/MovieList/MovieList'));

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (searchQuery === null) {
      setSearchResult(null);
      return;
    }

    async function fetchMovies() {
      const searchResult = await searchMovie(searchQuery);
      setSearchResult(searchResult);
    }

    fetchMovies();
  }, [searchQuery]);

  const onSubmit = searchValue => {
    setSearchParams({ query: searchValue });
  };

  return (
    <>
      <SearchForm
        value={searchQuery ?? ''}
        onSubmit={value => onSubmit(value)}
      ></SearchForm>
      <Suspense fallback={<div>Loading...</div>}>
        {searchResult && <MoviesList movies={searchResult}></MoviesList>}
      </Suspense>
    </>
  );
};

export default Movies;
