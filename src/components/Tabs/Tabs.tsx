import { NavLink } from 'react-router-dom';
import css from './Tabs.module.css';
import clsx from 'clsx';

const Tabs = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <ul className={css.linkList}>
      <li>
        <NavLink to="features" className={buildLinkClass}>
          Features
        </NavLink>
      </li>
      <li>
        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};

export default Tabs;
