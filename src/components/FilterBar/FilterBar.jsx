import { Field, Form, Formik } from 'formik';
import css from './FilterBar.module.css';
import Icon from '../Icon/Icon';

const FilterBar = () => {
  const initialValues = {
    location: '',
    vehicleType: '',
    equipment: [],
  };

  const equipmentOptions = ['AC', 'Automatic', 'Kitchen', 'TV', 'Bathroom'];
  const vehicleTypes = ['Van', 'Fully Integrated', 'Alcove'];

  return (
    <Formik initialValues={initialValues}>
      <Form>
        <aside className={css.sidebar}>
          <label className={css.label}>
            Location
            <Icon className={css.icon} id="map" w={20} h={20} />
            <Field
              className={css.input}
              type="text"
              name="location"
              placeholder="City"
            />
          </label>

          <h2 className={css.title}>Filters</h2>
          <h3 className={css.subtitle}>Vehicle equipment</h3>

          <div className={css.checkboxWrap}>
            {equipmentOptions.map(option => (
              <label key={option} className={css.checkboxLabel}>
                <Field type="checkbox" name="equipment" value={option} hidden />
                <Icon id={option.toLowerCase()} w={32} h={32} />
                {option}
              </label>
            ))}
          </div>

          <h3 className={css.subtitle}>Vehicle type</h3>

          <div className={css.radioWrap}>
            {vehicleTypes.map(type => (
              <label key={type} className={css.radioLabel}>
                <Field type="radio" name="vehicleType" value={type} hidden />
                <Icon id={type.toLowerCase()} w={32} h={32} />
                {type}
              </label>
            ))}
          </div>

          <button className={css.btn} type="submit">
            Search
          </button>
        </aside>
      </Form>
    </Formik>
  );
};

export default FilterBar;
