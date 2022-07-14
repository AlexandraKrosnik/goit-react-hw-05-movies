import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../service/Api';
import { CastList } from './CastList/CastList';
export const MovieCast = () => {
  const [castMovie, setCastMovie] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchCast() {
      const { cast } = await API.getCastOfTheMovie(movieId);
      console.log(cast);
      setCastMovie(cast);
    }
    fetchCast();
  }, [movieId]);
  return !!castMovie ? (
    <CastList cast={castMovie} />
  ) : (
    <p>There is no information about the cast of the film</p>
  );
};
