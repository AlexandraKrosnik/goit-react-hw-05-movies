import { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import * as API from '../service/Api';

export const MoviePage = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchMovie() {
      const movie = await API.getMovieById(movieId);
      //console.log(movie);
      setMovie(movie);
    }
    fetchMovie();
  }, [movieId]);
  return (
    <div>
      {!!movie && (
        <>
          <h2>{movie.original_title}</h2>
          <p>{movie.overview}</p>
          <hr />

          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          <Outlet />
        </>
      )}
    </div>
  );
};
