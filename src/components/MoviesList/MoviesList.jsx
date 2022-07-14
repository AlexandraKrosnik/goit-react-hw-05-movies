import { MovieItem } from 'components/MovieItem/MovieItem';

export const MoviesList = ({ list }) => {
  return (
    <ul>
      {list.map(({ id, original_title, original_name, poster_path }) => {
        const title = original_title || original_name;
        return <MovieItem key={id} id={id} title={title} img={poster_path} />;
      })}
    </ul>
  );
};
