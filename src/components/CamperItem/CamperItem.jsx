import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import css from './CamperItem.module.css';

const CamperItem = () => {
  const test = ['AC', 'Automatic', 'Kitchen', 'TV', 'Bathroom', 'Petrol'];

  return (
    <li className={css.item}>
      <img className={css.image} src="" alt="" width="292" height="320" />
      <div className={css.rightWrap}>
        <div className={css.wrapperTop}>
          <h2 className={css.model}>Mavericks</h2>
          <div className={css.topInnerWrap}>
            <p className={css.price}>€8000.00</p>
            <Icon id="heart" w="26" h="24" />
          </div>
        </div>

        <div className={css.middleWrap}>
          <p className={css.rating}>
            <Icon className={css.star} id="star" w="16" h="16" />
            4.4(2 Reviews)
          </p>
          <p className={css.location}>
            <Icon id="map" w="16" h="16" />
            Kyiv, Ukraine
          </p>
        </div>

        <p className={css.description}>
          Embrace simplicity and freedom with the Mavericks panel truckafawef
        </p>

        <ul className={css.badgesList}>
          {test.map(option => (
            <li className={css.badge} key={option}>
              <Icon id={option.toLowerCase()} w="20" h="20" />
              {option}
            </li>
          ))}
        </ul>

        <Link className={css.link}>Show more</Link>
      </div>
    </li>
  );
};

export default CamperItem;
