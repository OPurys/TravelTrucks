import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';

const NotFoundPage = () => {
  return (
    <section className={css.notFound}>
      <DocumentTitle>NotFound</DocumentTitle>
      <h2 className="visually-hidden">NotFound</h2>
      <img
        className={css.image}
        src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"
        alt="NotFound404"
      />
      <Link className={css.link} to="/catalog">
        Go Back
      </Link>
    </section>
  );
};
export default NotFoundPage;
