import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.wrapper}>
      <img
        className={css.image}
        src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"
        alt="NotFound404"
      />
      <Link className={css.link} to="/catalog">
        Go Back
      </Link>
    </div>
  );
};
export default NotFoundPage;
