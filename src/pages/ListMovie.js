import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import * as API from '../service/Api';
export const ListMovie = () => {
  const [trandingList, setTrandingList] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await API.getTrandingMovies();

        setTrandingList(data.results);
      } catch (error) {
        setError('Сталася помилка');
      }
    }
    fetchData();
  }, []);
  return <>{!!trandingList && <MoviesList list={trandingList}></MoviesList>}</>;
};
