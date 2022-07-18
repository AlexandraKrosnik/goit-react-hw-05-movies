import { MovieItem } from './MovieItem/MovieItem';
import { List } from './MoviesList.styled';

export const MoviesList = ({ list }) => {
  return (
    <>
      {!!list && (
        <List>
          {list.map(({ id, original_title, original_name, poster_path }) => {
            const title = original_title || original_name;
            return (
              <MovieItem key={id} id={id} title={title} img={poster_path} />
            );
          })}
        </List>
      )}
    </>
  );
};
