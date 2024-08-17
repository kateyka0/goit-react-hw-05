import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import MoviesList from "../components/MoviesList/MoviesList";
import { fetchTrendingMovies } from "../fetchApi";
const HomePage = () => {
    const [movies, setMovies] = useState([]);
    
  useEffect(() => {
    const getallMovies = async () => {
      try {
        const results = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        toast.error("Something went wrong. You can try again later");
      }
    };
    getallMovies();
  }, []);
  return (
    <div>
      <h1>Trending now</h1>
      <MoviesList movies={movies} />
      <Toaster />
    </div>
  );
};

export default HomePage;