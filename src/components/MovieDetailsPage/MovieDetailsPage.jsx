import { Link, Outlet, useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../../fetchApi";

const MovieDetails = () => {
  const { movieId } = useParams(); 
  const [movieDetails, setMovieDetails] = useState(null); 

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data); 
      } catch (error) {
         toast.error("Something went wrong. You can try again later");
      }
    };

    getMovieDetails();
  }, [movieId]); 

  return (
    <div className={css.wrapper}>
      {movieDetails && ( 
        <div>
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
        </div>
      )}

      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;