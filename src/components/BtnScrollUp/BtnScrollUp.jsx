import { useSelector } from 'react-redux';
import Icon from '../Icon/Icon';
import css from './BtnScrollUp.module.css';
import { selectScrollY } from '../../redux/scrollUp/selectors';
import { useLocation } from 'react-router-dom';

const BtnScrollUp = () => {
  const scrollY = useSelector(selectScrollY);
  const location = useLocation();

  const allowedPaths = ['/catalog'];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    allowedPaths.includes(location.pathname) &&
    scrollY > 500 && (
      <button
        className={css.btnScrollUp}
        type="button"
        onClick={handleScrollToTop}
      >
        <Icon className={css.iconArrowUp} id="arrow_up" w="20" h="20" />
      </button>
    )
  );
};

export default BtnScrollUp;
