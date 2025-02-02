import Icon from '../Icon/Icon';
import css from './AboutCamper.module.css';

const AboutCamper = ({ camper }) => {
  return (
    <div>
      <h2 className={css.model}>{camper?.name}</h2>
      <div className={css.wrapperTop}>
        <p className={css.rating}>
          <Icon className={css.star} id="star" w="16" h="16" />
          {camper?.rating}({camper?.reviews.length} Reviews)
        </p>
        <p className={css.location}>
          <Icon id="map" w="16" h="16" />
          {camper?.location}
        </p>
      </div>
      <p className={css.price}>€{camper?.price}.00</p>

      <div className={css.gallery}>
        <img className={css.image} src="" alt="" width="292" height="312" />
        <img src="" alt="" width="292" height="312" />
        <img src="" alt="" width="292" height="312" />
        <img src="" alt="" width="292" height="312" />
      </div>

      <p className={css.description}>{camper?.description}</p>
    </div>
  );
};
export default AboutCamper;
