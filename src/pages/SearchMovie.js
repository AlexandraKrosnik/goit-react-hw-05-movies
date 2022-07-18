import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import * as API from '../service/Api';

import { Section } from 'Section/Section';
import { Container } from 'components/Container/Container';

import { Empty, Pagination, Input } from 'antd';
import { MoviesList } from 'components/MoviesList/MoviesList';

const { Search } = Input;
export const SearchMovie = () => {
  const [isloading, setIsLoading] = useState(false);
  const [moviesByQuery, setMoviesByQuery] = useState();
  const [totalPage, setTotalPage] = useState();
  const [error, setError] = useState('Введіть назву фільму');
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('movie');
  const page = searchParams.get('page');
  useEffect(() => {
    !page && setSearchParams({ page: 1 });
  }, [setSearchParams, page]);
  useEffect(() => {
    async function fetchData() {
      try {
        setError(false);
        setIsLoading(true);
        const movies = await API.getMovieByQuery(movie, page);

        setTotalPage(movies.total_pages);
        setMoviesByQuery(movies.results);
        !movies.results.length &&
          setError('По даному запиту фільмів не знайдено');
        setIsLoading(false);
      } catch (error) {
        setError('По даному запиту фільмів не знайдено');
      }
    }

    if (!!movie) {
      fetchData();
    }
  }, [movie, page]);

  const onSearch = value => {
    setSearchParams({ movie: value.trim(), page: page });
  };
  const onChange = p => {
    setSearchParams({ movie: movie, page: p });
    window.scrollTo(0, 0);
  };
  return (
    <Container>
      <Section>
        <Search
          placeholder="Search movie"
          onSearch={onSearch}
          enterButton
          loading={isloading}
        />
      </Section>
      <Section>
        {!!moviesByQuery && <MoviesList list={moviesByQuery} />}
        {(!!error || !moviesByQuery) && <Empty description={error} />}
        {!!moviesByQuery && !!moviesByQuery.length && (
          <Pagination
            defaultCurrent={page}
            total={totalPage}
            onChange={onChange}
            style={{ display: 'flex', justifyContent: 'center' }}
          />
        )}
      </Section>
    </Container>
  );
};
