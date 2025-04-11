import Icon from '../Icon/Icon';
import css from './BtnScrollUp.module.css';
import { selectScrollY } from '../../redux/scrollUp/selectors';
import { useLocation, Location } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

const BtnScrollUp = () => {
  const scrollY = useAppSelector(selectScrollY);
  const location: Location = useLocation();

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
        <Icon className={css.iconArrowUp} id="arrow_up" w={20} h={20} />
      </button>
    )
  );
};

export default BtnScrollUp;
