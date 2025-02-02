import { useSelector } from 'react-redux';
import CamperItem from '../CamperItem/CamperItem';
import css from './CampersList.module.css';
import { selectCampers } from '../../redux/campers/selectors';

const CampersList = () => {
  const campers = useSelector(selectCampers);

  return (
    <ul className={css.list}>
      {campers?.map(camper => (
        <CamperItem key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};
export default CampersList;
