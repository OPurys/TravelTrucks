import { NavLink } from 'react-router-dom';
import css from './Tabs.module.css';
import { buildLinkClass } from '../../utils/buildLinkClass';

const Tabs = () => {
  return (
    <ul className={css.linkList}>
      <li>
        <NavLink
          to="features"
          className={({ isActive }) =>
            buildLinkClass({ isActive, styles: css })
          }
        >
          Features
        </NavLink>
      </li>
      <li>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            buildLinkClass({ isActive, styles: css })
          }
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};

export default Tabs;
