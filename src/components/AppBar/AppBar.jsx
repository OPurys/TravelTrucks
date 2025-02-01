import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import css from './AppBar.module.css';
import clsx from 'clsx';

const AppBar = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <header className={css.wrapper}>
      <Icon id="logo" w="136" h="17" />
      <nav className={css.nav}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/catalog">
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};
export default AppBar;
