import { lazy, Suspense, useEffect, useState } from 'react';
import { getTrandingMovies } from './API';

const MoviesList = lazy(() => import('components/MovieList/MovieList'));

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState();

  useEffect(() => {
    const fetchPopular = async () => {
      const fetchResult = await getTrandingMovies();
      setTrandingMovies(fetchResult);
    };
    fetchPopular();
  }, []);

  if (trandingMovies) {
    return (
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <MoviesList movies={trandingMovies} />
        </Suspense>
      </main>
    );
  }
};

export default Home;
