import { Link, Outlet } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

const MovieDetails = () => {
  return (
    <div className={css.wrapper}>
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