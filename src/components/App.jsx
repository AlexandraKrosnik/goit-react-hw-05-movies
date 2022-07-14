import { ListMovie } from 'pages/ListMovie';
import { MoviePage } from 'pages/MoviePage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { MovieCast } from './MovieCast/MovieCast';
import { MovieReviews } from './MovieReviews/MovieReviews';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ListMovie />} />
        <Route path="/movies" element={<ListMovie />} />
        <Route path="/movies/:movieId" element={<MoviePage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
