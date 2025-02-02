import Icon from '../Icon/Icon';
import css from './Features.module.css';

const Features = () => {
  const test = ['AC', 'Automatic', 'Kitchen', 'TV', 'Bathroom', 'Petrol'];
  return (
    <div className={css.wrapper}>
      <ul className={css.badgesList}>
        {test.map(option => (
          <li className={css.badge} key={option}>
            <Icon id={option.toLowerCase()} w="20" h="20" />
            {option}
          </li>
        ))}
      </ul>

      <h2 className={css.title}>Vehicle details</h2>

      <ul className={css.detailsList}>
        <li className={css.detailsItem}>
          <p>Form</p>
          <p>Panel truck</p>
        </li>
        <li className={css.detailsItem}>
          <p>Length</p>
          <p>5.4 m</p>
        </li>
        <li className={css.detailsItem}>
          <p>Width</p>
          <p>2.01 m</p>
        </li>
        <li className={css.detailsItem}>
          <p>Height</p>
          <p>2.05 m</p>
        </li>
        <li className={css.detailsItem}>
          <p>Tank</p>
          <p>132 I</p>
        </li>
        <li className={css.detailsItem}>
          <p>Consumption</p>
          <p>12.4l/100km</p>
        </li>
      </ul>
    </div>
  );
};
export default Features;
