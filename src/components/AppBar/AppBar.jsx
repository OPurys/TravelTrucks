import { Link, NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import css from './AppBar.module.css';
import clsx from 'clsx';

const AppBar = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <header className={css.wrapper}>
      <nav className={css.nav}>
        <Link className={css.logoLink} to="/">
          <Icon id="logo" w="136" h="17" />
        </Link>

        <ul className={css.linkList}>
          <li>
            <NavLink className={buildLinkClass} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="/catalog">
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default AppBar;
