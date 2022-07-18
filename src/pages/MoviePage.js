import { Movie } from 'components/Movie/Movie';
import { useEffect, useState } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';

import { Section } from 'Section/Section';
import * as API from '../service/Api';
import { Tabs } from 'antd';
import { Container } from 'components/Container/Container';
import { Empty, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

export const MoviePage = () => {
  const [movie, setMovie] = useState();
  const [error, setError] = useState();
  const { movieId } = useParams();
  let { state } = useLocation();
  const { TabPane } = Tabs;
  let navigate = useNavigate();
  useEffect(() => {
    async function fetchMovie() {
      try {
        const movie = await API.getMovieById(movieId);
        setMovie(movie);
      } catch {
        setError('Немає інформації про фільм!');
      }
    }
    fetchMovie();
  }, [movieId]);

  const onChange = key => {
    if (key === '1') {
      navigate(`/movies/${movieId}/cast`);
    } else if (key === '2') {
      navigate(`/movies/${movieId}/reviews`);
    }
  };

  const goBack = () => {
    state?.from
      ? navigate(state.from.pathname + state.from.search)
      : navigate('/');
  };
  return (
    <Section>
      <Container>
        <Button type="text " icon={<ArrowLeftOutlined />} onClick={goBack}>
          Go back
        </Button>
      </Container>

      {!!movie && (
        <>
          <Movie movie={movie} />
          <Container>
            <Tabs activeKey="3" onChange={onChange}>
              <TabPane tab="Cast" key="1"></TabPane>
              <TabPane tab="Reviews" key="2"></TabPane>
            </Tabs>
          </Container>

          <Outlet />
        </>
      )}
      {!movie && <Empty description={error} />}
    </Section>
  );
};
