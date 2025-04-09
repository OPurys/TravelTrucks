import Icon from '../Icon/Icon';
import css from './VehicleListIcons.module.css';

const VehicleListIcons = ({ camper }) => {
  return (
    <ul className={css.iconsList}>
      {camper?.engine && (
        <li className={css.iconsItem}>
          <Icon className={css.icons} id="petrol" w={20} h={20} />
          {camper.engine}
        </li>
      )}
      {camper?.transmission && (
        <li className={css.iconsItem}>
          <Icon className={css.icons} id="automatic" w={20} h={20} />
          {camper.transmission}
        </li>
      )}
      {camper?.AC && (
        <li className={css.iconsItem}>
          <Icon className={css.icons} id="ac" w={20} h={20} />
          AC
        </li>
      )}
      {camper?.bathroom && (
        <li className={css.iconsItem}>
          <Icon className={css.icons} id="bathroom" w={20} h={20} />
          Bathroom
        </li>
      )}
      {camper?.kitchen && (
        <li className={css.iconsItem}>
          <Icon className={css.icons} id="kitchen" w={20} h={20} />
          Kitchen
        </li>
      )}
      {camper?.TV && (
        <li className={css.iconsItem}>
          <Icon className={css.icons} id="tv" w={20} h={20} />
          TV
        </li>
      )}
      {camper?.radio && (
        <li className={css.iconsItem}>
          <Icon className={css.icons} id="radio" w={20} h={20} />
          Radio
        </li>
      )}
      {camper?.refrigerator && (
        <li className={css.iconsItem}>
          <Icon className={css.icons} id="fridge" w={20} h={20} />
          Refrigerator
        </li>
      )}
      {camper?.microwave && (
        <li className={css.iconsItem}>
          <Icon
            className={`${css.icons} ${css.icon}`}
            id="microwave"
            w={20}
            h={20}
          />
          Microwave
        </li>
      )}
      {camper?.gas && (
        <li className={css.iconsItem}>
          <Icon className={`${css.icons} ${css.icon}`} id="gas" w={20} h={20} />
          Gas
        </li>
      )}
      {camper?.water && (
        <li className={css.iconsItem}>
          <Icon
            className={`${css.icons} ${css.icon}`}
            id="water"
            w={20}
            h={20}
          />
          Water
        </li>
      )}
    </ul>
  );
};

export default VehicleListIcons;
