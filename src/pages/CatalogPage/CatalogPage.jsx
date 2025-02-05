import { useDispatch, useSelector } from 'react-redux';
import CampersList from '../../components/CampersList/CampersList';
import FilterBar from '../../components/FilterBar/FilterBar';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import css from './CatalogPage.module.css';
import { useEffect } from 'react';
import { fetchAllCampers } from '../../redux/campers/operations';
import {
  selectCampers,
  selectCurrentPage,
  selectIsError,
  selectIsLoading,
  selectTotalItems,
} from '../../redux/campers/selectors';
import { setCurrentPage } from '../../redux/campers/slice';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector(selectCurrentPage);
  const totalItems = useSelector(selectTotalItems);
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const limit = 4;
  const totalPages = Math.ceil(totalItems / limit);

  useEffect(() => {
    dispatch(fetchAllCampers({ page: currentPage, limit }));
  }, [dispatch, currentPage]);

  const handlePageChange = page => {
    dispatch(setCurrentPage(page));
  };

  return (
    <section className={css.catalog}>
      <FilterBar />

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}

      {!isLoading && (
        <div>
          <CampersList campers={campers} />
          {currentPage < totalPages && (
            <LoadMoreBtn onClick={() => handlePageChange(currentPage + 1)} />
          )}
        </div>
      )}
    </section>
  );
};
export default CatalogPage;
