const KEY = '0b114c333c4887b3918784cce6aaf562';
const APIURL = 'https://api.themoviedb.org/';

export const getTrandingMovies = async () => {
  const fetchResult = await (
    await fetch(APIURL + `3/trending/movie/day?api_key=${KEY}`)
  ).json();
  return fetchResult.results;
};

export const searchMovie = async name => {
  const fetchResult = await (
    await fetch(APIURL + `3/search/movie?api_key=${KEY}&query=${name}`)
  ).json();
  return fetchResult.results;
};

export const getMovieDetails = async movieId => {
  const fetchResult = await (
    await fetch(APIURL + `3/movie/${movieId}?api_key=${KEY}`)
  ).json();
  return fetchResult;
};

export const getMovieCredits = async credit_id => {
  const fetchResult = await (
    await fetch(APIURL + `3/movie/${credit_id}/credits?api_key=${KEY}`)
  ).json();
  return fetchResult;
};

export const getMovieReviews = async movieId => {
  const fetchResult = await (
    await fetch(APIURL + `3/movie/${movieId}/reviews?api_key=${KEY}`)
  ).json();
  return fetchResult;
};
