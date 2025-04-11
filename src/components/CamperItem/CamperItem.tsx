import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import css from './CamperItem.module.css';
import VehicleListIcons from '../VehicleListIcons/VehicleListIcons';
import { setFavorites } from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';
import { Camper } from '../../../types/camper';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

interface CamperItemProps {
  camper: Camper;
}

const CamperItem = ({ camper }: CamperItemProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);

  const handleClick = (id: string): void => {
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
            <p className={css.price}>&#8364;{camper.price.toFixed(2)}</p>
            <button
              className={css.btnIcon}
              type="button"
              onClick={() => handleClick(camper.id)}
            >
              <Icon
                className={
                  favorites.includes(camper.id) ? css.isActive : css.iconHeart
                }
                id="heart"
                w={26}
                h={24}
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
              <Icon className={css.star} id="star" w={16} h={16} />
              {camper.rating}({camper.reviews.length} Reviews)
            </Link>
          </p>
          <p className={css.location}>
            <Icon id="map" w={16} h={16} />
            {camper.location}
          </p>
        </div>

        <p className={css.description}>{camper.description}</p>

        <VehicleListIcons camper={camper} />

        <Link to={`/catalog/${camper.id}/features`} className={css.link}>
          Show more
        </Link>
      </div>
    </li>
  );
};

export default CamperItem;
