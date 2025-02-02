import { Outlet, useParams } from 'react-router-dom';
import css from './DetailsPage.module.css';
import AboutCamper from '../../components/AboutCamper/AboutCamper';
import BookCamperForm from '../../components/BookCamperForm/BookCamperForm';
import Tabs from '../../components/Tabs/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamper } from '../../redux/campers/operations';
import { useEffect } from 'react';
import { selectCamperDetails } from '../../redux/campers/selectors';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camper = useSelector(selectCamperDetails);

  useEffect(() => {
    dispatch(fetchCamper(id));
  }, [dispatch, id]);

  return (
    <section className={css.details}>
      <AboutCamper camper={camper} />
      <Tabs />
      <div className={css.wrapper}>
        <Outlet />
        <BookCamperForm />
      </div>
    </section>
  );
};
export default DetailsPage;
