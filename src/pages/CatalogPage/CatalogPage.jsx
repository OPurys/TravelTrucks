import CampersList from '../../components/CampersList/CampersList';
import FilterBar from '../../components/FilterBar/FilterBar';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <section className={css.catalog}>
      <FilterBar />
      <CampersList />
    </section>
  );
};
export default CatalogPage;
