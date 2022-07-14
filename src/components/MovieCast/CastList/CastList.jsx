import { CastItem } from '../CastItem/CastItem';
export const CastList = ({ cast }) => {
  return cast.map(actor => <CastItem key={actor.id} actor={actor} />);
};
