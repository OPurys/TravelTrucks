import AboutCamper from '../../components/AboutCamper/AboutCamper';
import BookCamperForm from '../../components/BookCamperForm/BookCamperForm';
import CampersList from '../../components/CampersList/CampersList';
import Features from '../../components/Features/Features';
import FilterBar from '../../components/FilterBar/FilterBar';
import Reviews from '../../components/Reviews/Reviews';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <section className={css.catalog}>
      {/* <FilterBar />
      <CampersList /> */}
      <AboutCamper />
      {/* <Features /> */}
      {/* <Reviews /> */}
      <BookCamperForm />
    </section>
  );
};
export default CatalogPage;
