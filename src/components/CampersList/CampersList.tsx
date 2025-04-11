import { Camper } from '../../../types/camper';
import CamperItem from '../CamperItem/CamperItem';
import css from './CampersList.module.css';

interface CamperListProps {
  campers: Camper[];
}

const CampersList = ({ campers }: CamperListProps) => {
  return (
    <ul className={css.list}>
      {campers.map(camper => (
        <CamperItem key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};
export default CampersList;
