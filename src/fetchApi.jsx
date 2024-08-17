import axios from "axios";
export {
  fetchTrendingMovies,
   fetchMovies,
  fetchMovieDetails,
  fetchReviews,
  fetchCast,
};
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODJlNTk5NGI2N2IzMTU5Zjc1OTA2NzI0ZTkxMTNhZiIsIm5iZiI6MTcyMzkwODc3MC4yMDA2OTgsInN1YiI6IjY2YzBjMTA2Yzg3NGRjNWE4ZTlkYzliMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yAO9RvBDzI1TYNkGZ_YyHueJ-nFzC9Y1MR7IHmzonXU",
  },
};
const fetchTrendingMovies = async () => {
  const { data } = await axios(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );
  return data.results;
};

const fetchMovies = async (userRequest) => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/search/movie?query=${userRequest}&language=en-US&page=1`,
    options
  );
  return data.results;
};

//'https://api.themoviedb.org/3/search/movie?query=gru&language=en-US&page=1'

const fetchMovieDetails = async (movieId) => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return data;
};

const fetchCast = async (movieId) => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options
  );
  return data;
};

const fetchReviews = async (movieId) => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return data;
};

