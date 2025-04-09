import { Outlet, useParams } from 'react-router-dom';
import css from './DetailsPage.module.css';
import AboutCamper from '../../components/AboutCamper/AboutCamper';
import BookCamperForm from '../../components/BookCamperForm/BookCamperForm';
import Tabs from '../../components/Tabs/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamper } from '../../redux/campers/operations';
import { Suspense, useEffect } from 'react';
import {
  selectCamperDetails,
  selectIsError,
  selectIsLoading,
} from '../../redux/campers/selectors';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camper = useSelector(selectCamperDetails);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchCamper(id));
  }, [dispatch, id]);

  return (
    <section className={css.details}>
      <DocumentTitle>Details</DocumentTitle>
      <h2 className="visually-hidden">Details about the camper</h2>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}

      {!isLoading && (
        <>
          <AboutCamper camper={camper} />
          <Tabs />
          <div className={css.wrapper}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
            <BookCamperForm />
          </div>
        </>
      )}
    </section>
  );
};
export default DetailsPage;
