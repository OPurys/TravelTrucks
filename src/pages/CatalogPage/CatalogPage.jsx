import CampersList from '../../components/CampersList/CampersList';
import FilterBar from '../../components/FilterBar/FilterBar';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <section className={css.catalog}>
      <FilterBar />
      <div>
        <CampersList />
        <LoadMoreBtn />
      </div>
    </section>
  );
};
export default CatalogPage;
