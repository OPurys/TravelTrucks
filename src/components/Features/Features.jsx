import { useSelector } from 'react-redux';
import { selectCamperDetails } from '../../redux/campers/selectors';
import Icon from '../Icon/Icon';
import css from './Features.module.css';

const Features = () => {
  const test = ['AC', 'Automatic', 'Kitchen', 'TV', 'Bathroom', 'Petrol'];

  const camper = useSelector(selectCamperDetails);

  return (
    <div className={css.wrapper}>
      <ul className={css.badgesList}>
        {test.map(option => (
          <li className={css.badge} key={option}>
            <Icon id={option.toLowerCase()} w="20" h="20" />
            {option}
          </li>
        ))}
      </ul>

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
  );
};
export default Features;
