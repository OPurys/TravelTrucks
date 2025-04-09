import { useSelector } from 'react-redux';
import Icon from '../Icon/Icon';
import css from './Reviews.module.css';
import { selectCamperDetails } from '../../redux/campers/selectors';

const Reviews = () => {
  const camper = useSelector(selectCamperDetails);

  return (
    <ul className={css.reviewsList}>
      {camper?.reviews.map((review, i) => (
        <li key={i} className={css.reviewsItem}>
          <div className={css.wrapperTop}>
            <div className={css.avatar}>{review.reviewer_name[0]}</div>
            <div className={css.innerWrap}>
              <h2 className={css.name}>{review.reviewer_name}</h2>
              <div className={css.starWrap}>
                <Icon
                  className={
                    review.reviewer_rating >= 1 ? css.yellow : css.star
                  }
                  id="star"
                  w="16"
                  h="16"
                />
                <Icon
                  className={
                    review.reviewer_rating >= 2 ? css.yellow : css.star
                  }
                  id="star"
                  w="16"
                  h="16"
                />
                <Icon
                  className={
                    review.reviewer_rating >= 3 ? css.yellow : css.star
                  }
                  id="star"
                  w="16"
                  h="16"
                />
                <Icon
                  className={
                    review.reviewer_rating >= 4 ? css.yellow : css.star
                  }
                  id="star"
                  w="16"
                  h="16"
                />
                <Icon
                  className={
                    review.reviewer_rating >= 5 ? css.yellow : css.star
                  }
                  id="star"
                  w="16"
                  h="16"
                />
              </div>
            </div>
          </div>

          <p className={css.text}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
