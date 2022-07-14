import { Link } from 'react-router-dom';

export const MovieItem = ({ id, title, img }) => {
  const poster = `https://image.tmdb.org/t/p/w500/${img}`;
  return (
    <li>
      <Link to={`/movies/${id}`}>
        {/* <img src={poster} alt={title} /> */}
        <p>{title}</p>
      </Link>
    </li>
  );
};
