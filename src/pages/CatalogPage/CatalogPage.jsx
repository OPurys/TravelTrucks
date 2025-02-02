import { useDispatch } from 'react-redux';
import CampersList from '../../components/CampersList/CampersList';
import FilterBar from '../../components/FilterBar/FilterBar';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import css from './CatalogPage.module.css';
import { useEffect } from 'react';
import { fetchAllCampers } from '../../redux/campers/operations';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);

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
