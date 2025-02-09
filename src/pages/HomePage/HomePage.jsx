import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';

const HomePage = () => {
  return (
    <section className={css.hero}>
      <DocumentTitle>TravelTrucks</DocumentTitle>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.subtext}>
        You can find everything you want in our catalog
      </p>
      <Link className={css.link} to="/catalog">
        View Now
      </Link>
    </section>
  );
};
export default HomePage;
