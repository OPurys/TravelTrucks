import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import css from './CamperItem.module.css';
import VehiclesIcon from '../VehiclesIcon/VehiclesIcon';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorites } from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';

const CamperItem = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const handleClick = id => {
    dispatch(setFavorites(id));
  };

  return (
    <li className={css.item}>
      <img
        className={css.image}
        src={camper.gallery[0].original}
        alt={camper.name}
        width="292"
        height="320"
      />
      <div className={css.rightWrap}>
        <div className={css.wrapperTop}>
          <h2 className={css.model}>{camper.name}</h2>
          <div className={css.topInnerWrap}>
            <p className={css.price}>&#8364;{camper.price}.00</p>
            <button
              className={css.btnIcon}
              type="button"
              onClick={() => handleClick(camper.id)}
            >
              <Icon
                className={favorites.includes(camper.id) && css.iconHeart}
                id="heart"
                w="26"
                h="24"
              />
            </button>
          </div>
        </div>

        <div className={css.middleWrap}>
          <p className={css.rating}>
            <Link
              className={css.ratingLink}
              to={`/catalog/${camper.id}/reviews`}
            >
              <Icon className={css.star} id="star" w="16" h="16" />
              {camper.rating}({camper.reviews.length} Reviews)
            </Link>
          </p>
          <p className={css.location}>
            <Icon id="map" w="16" h="16" />
            {camper.location}
          </p>
        </div>

        <p className={css.description}>{camper.description}</p>

        <VehiclesIcon camper={camper} />

        <Link to={`/catalog/${camper.id}/features`} className={css.link}>
          Show more
        </Link>
      </div>
    </li>
  );
};

export default CamperItem;
