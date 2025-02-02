import { Outlet } from 'react-router-dom';
import css from './DetailsPage.module.css';
import AboutCamper from '../../components/AboutCamper/AboutCamper';
import BookCamperForm from '../../components/BookCamperForm/BookCamperForm';
import Tabs from '../../components/Tabs/Tabs';

const DetailsPage = () => {
  return (
    <section className={css.details}>
      <AboutCamper />
      <Tabs />
      <div className={css.wrapper}>
        <Outlet />
        <BookCamperForm />
      </div>
    </section>
  );
};
export default DetailsPage;
