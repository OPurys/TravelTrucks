import CamperItem from '../CamperItem/CamperItem';
import css from './CampersList.module.css';

const CampersList = () => {
  return (
    <ul className={css.list}>
      <CamperItem />
    </ul>
  );
};
export default CampersList;
