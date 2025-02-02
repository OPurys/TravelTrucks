import Icon from '../Icon/Icon';
import css from './Reviews.module.css';

const Reviews = () => {
  return (
    <ul className={css.reviewsList}>
      {/* {reviews?.map(review => ( */}
      <li className={css.reviewsItem}>
        <div className={css.wrapperTop}>
          <img className={css.avatar} src="" alt="" width="60" height="60" />
          <div className={css.innerWrap}>
            <h2 className={css.name}>Alisa</h2>
            <div className={css.starWrap}>
              <Icon className={css.star} id="star" w="16" h="16" />
              <Icon className={css.star} id="star" w="16" h="16" />
              <Icon className={css.star} id="star" w="16" h="16" />
              <Icon className={css.star} id="star" w="16" h="16" />
              <Icon className={css.star} id="star" w="16" h="16" />
            </div>
          </div>
        </div>

        <p className={css.text}>
          The Mavericks panel truck was a perfect choice for my solo road trip.
          Compact, easy to drive, and had all the essentials. The kitchen
          facilities were sufficient, and the overall experience was fantastic.
        </p>
      </li>
      <li className={css.reviewsItem}>
        <div className={css.wrapperTop}>
          <img className={css.avatar} src="" alt="" width="60" height="60" />
          <div className={css.innerWrap}>
            <h2 className={css.name}>Alisa</h2>
            <div className={css.starWrap}>
              <Icon className={css.star} id="star" w="16" h="16" />
              <Icon className={css.star} id="star" w="16" h="16" />
              <Icon className={css.star} id="star" w="16" h="16" />
              <Icon className={css.star} id="star" w="16" h="16" />
              <Icon className={css.star} id="star" w="16" h="16" />
            </div>
          </div>
        </div>

        <p className={css.text}>
          The Mavericks panel truck was a perfect choice for my solo road trip.
          Compact, easy to drive, and had all the essentials. The kitchen
          facilities were sufficient, and the overall experience was fantastic.
        </p>
      </li>
      {/* ))} */}
    </ul>
  );
};

export default Reviews;
