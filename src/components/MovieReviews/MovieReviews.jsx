import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as API from '../../service/Api';
export const MovieReviews = () => {
  const [reviewsMovie, setReviewsMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      const reviews = await API.getReviewsOfTheMovie(movieId);
      //   console.log(reviews);
      setReviewsMovie(reviews.results);
    }
    fetchCast();
  }, [movieId]);

  return reviewsMovie?.length !== 0 && !!reviewsMovie ? (
    <ul>
      {reviewsMovie.map(r => (
        <li key={r.id}>
          <h3>Author:{r.author}</h3>
          <p>{r.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don`t have any reviews for this movie</p>
  );
};
