import Icon from '../Icon/Icon';
import css from './AboutCamper.module.css';

const AboutCamper = () => {
  return (
    <div>
      <h2 className={css.model}>Mavericks</h2>
      <div className={css.wrapperTop}>
        <p className={css.rating}>
          <Icon className={css.star} id="star" w="16" h="16" />
          4.4(2 Reviews)
        </p>
        <p className={css.location}>
          <Icon id="map" w="16" h="16" />
          Kyiv, Ukraine
        </p>
      </div>
      <p className={css.price}>€8000.00</p>

      <div className={css.gallery}>
        <img className={css.image} src="" alt="" width="292" height="312" />
        <img src="" alt="" width="292" height="312" />
        <img src="" alt="" width="292" height="312" />
        <img src="" alt="" width="292" height="312" />
      </div>

      <p className={css.description}>
        Embrace simplicity and freedom with the Mavericks panel truck, an ideal
        choice for solo travelers or couples seeking a compact and efficient way
        to explore the open roads. This no-frills yet reliable panel truck
        offers the essentials for a comfortable journey, making it the perfect
        companion for those who value simplicity and functionality.
      </p>
    </div>
  );
};
export default AboutCamper;
