import { Link, NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import css from './AppBar.module.css';
import { buildLinkClass } from '../../utils/buildLinkClass';

const AppBar = () => {
  return (
    <header className={css.wrapper}>
      <nav className={css.nav}>
        <Link className={css.logoLink} to="/">
          <Icon id="logo" w={136} h={17} />
        </Link>

        <ul className={css.linkList}>
          <li>
            <NavLink
              className={({ isActive }) =>
                buildLinkClass({ isActive, styles: css })
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                buildLinkClass({ isActive, styles: css })
              }
              to="/catalog"
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
