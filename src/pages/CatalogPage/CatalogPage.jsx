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
  selectParams,
  selectTotalItems,
} from '../../redux/campers/selectors';
import { setCurrentPage } from '../../redux/campers/slice';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { setScrollPosition } from '../../redux/scrollUp/slice';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);
  const currentPage = useSelector(selectCurrentPage);
  const totalItems = useSelector(selectTotalItems);
  const params = useSelector(selectParams);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const limit = 4;
  const totalPages = Math.ceil(totalItems / limit);

  useEffect(() => {
    dispatch(fetchAllCampers({ currentPage, params }));

    const handleScroll = () => {
      dispatch(setScrollPosition(window.scrollY));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, currentPage, params]);

  const handlePageChange = page => {
    dispatch(setCurrentPage(page));
  };

  return (
    <section className={css.catalog}>
      <h2 className="visually-hidden">Catalog</h2>
      <FilterBar />
      {isLoading && <Loader />}
      {isError && <ErrorMessage message="Something went wrong..." />}
      {!campers.length && (
        <ErrorMessage message="There are no data for the specified filters" />
      )}
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
