import Icon from '../Icon/Icon';
import css from './VehiclesIcon.module.css';

const VehiclesIcon = ({ camper }) => {
  return (
    <ul className={css.iconsList}>
      {camper?.engine && (
        <li className={css.iconsItem}>
          <Icon id="petrol" w={20} h={20} />
          Petrol
        </li>
      )}
      {camper?.transmission && (
        <li className={css.iconsItem}>
          <Icon id="automatic" w={20} h={20} />
          Automatic
        </li>
      )}
      {camper?.AC && (
        <li className={css.iconsItem}>
          <Icon id="ac" w={20} h={20} />
          AC
        </li>
      )}
      {camper?.bathroom && (
        <li className={css.iconsItem}>
          <Icon id="bathroom" w={20} h={20} />
          Bathroom
        </li>
      )}
      {camper?.kitchen && (
        <li className={css.iconsItem}>
          <Icon id="kitchen" w={20} h={20} />
          Kitchen
        </li>
      )}
      {camper?.TV && (
        <li className={css.iconsItem}>
          <Icon id="tv" w={20} h={20} />
          TV
        </li>
      )}
      {camper?.radio && (
        <li className={css.iconsItem}>
          <Icon id="radio" w={20} h={20} />
          Radio
        </li>
      )}
      {camper?.refrigerator && (
        <li className={css.iconsItem}>
          <Icon id="fridge" w={20} h={20} />
          Refrigerator
        </li>
      )}
      {camper?.microwave && (
        <li className={css.iconsItem}>
          <Icon className={css.icon} id="microwave" w={20} h={20} />
          Microwave
        </li>
      )}
      {camper?.gas && (
        <li className={css.iconsItem}>
          <Icon className={css.icon} id="gas" w={20} h={20} />
          Gas
        </li>
      )}
      {camper?.water && (
        <li className={css.iconsItem}>
          <Icon className={css.icon} id="water" w={20} h={20} />
          Water
        </li>
      )}
    </ul>
  );
};

export default VehiclesIcon;
