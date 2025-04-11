import { selectCamperDetails } from '../../redux/campers/selectors';
import css from './Features.module.css';
import VehicleListIcons from '../VehicleListIcons/VehicleListIcons';
import { useAppSelector } from '../../redux/hooks';

const Features = () => {
  const camper = useAppSelector(selectCamperDetails);

  return (
    <div className={css.wrapper}>
      <VehicleListIcons camper={camper} />

      <div>
        <h2 className={css.title}>Vehicle details</h2>

        <ul className={css.detailsList}>
          <li className={css.detailsItem}>
            <p>Form</p>
            <p>{camper?.form}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Length</p>
            <p>{camper?.length}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Width</p>
            <p>{camper?.width}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Height</p>
            <p>{camper?.height}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Tank</p>
            <p>{camper?.tank}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Consumption</p>
            <p>{camper?.consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
