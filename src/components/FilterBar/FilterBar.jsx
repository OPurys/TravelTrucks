import { Field, Form, Formik } from 'formik';
import css from './FilterBar.module.css';
import Icon from '../Icon/Icon';
import { useDispatch } from 'react-redux';
import { setParams } from '../../redux/campers/slice.js';

const FilterBar = () => {
  const initialValues = {
    location: '',
    equipment: [],
    form: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = values => {
    const params = new URLSearchParams();

    if (values.equipment.length) {
      values.equipment.map(item => {
        if (item === 'automatic') {
          params.append('transmission', item);
        } else {
          params.append(item, true);
        }
      });
    }

    if (values.form) {
      params.append('form', values.form);
    }

    if (values.location) {
      params.append('location', values.location.split(', ')[0]);
    }

    const queryString = params.toString();

    dispatch(setParams(queryString));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
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
                autoComplete="off"
              />
            </label>

            <h2 className={css.title}>Filters</h2>
            <h3 className={css.subtitle}>Vehicle equipment</h3>

            <div className={css.checkboxWrap}>
              <label
                className={
                  values.equipment.includes('AC')
                    ? `${css.checkboxLabel} ${css.active}`
                    : css.checkboxLabel
                }
              >
                <Field
                  className="visually-hidden"
                  type="checkbox"
                  name="equipment"
                  value="AC"
                />
                <Icon id="ac" w={32} h={32} />
                AC
              </label>
              <label
                className={
                  values.equipment.includes('automatic')
                    ? `${css.checkboxLabel} ${css.active}`
                    : css.checkboxLabel
                }
              >
                <Field
                  className="visually-hidden"
                  type="checkbox"
                  name="equipment"
                  value="automatic"
                />
                <Icon id="automatic" w={32} h={32} />
                Automatic
              </label>
              <label
                className={
                  values.equipment.includes('kitchen')
                    ? `${css.checkboxLabel} ${css.active}`
                    : css.checkboxLabel
                }
              >
                <Field
                  className="visually-hidden"
                  type="checkbox"
                  name="equipment"
                  value="kitchen"
                />
                <Icon id="kitchen" w={32} h={32} />
                Kitchen
              </label>
              <label
                className={
                  values.equipment.includes('TV')
                    ? `${css.checkboxLabel} ${css.active}`
                    : css.checkboxLabel
                }
              >
                <Field
                  className="visually-hidden"
                  type="checkbox"
                  name="equipment"
                  value="TV"
                />
                <Icon id="tv" w={32} h={32} />
                TV
              </label>
              <label
                className={
                  values.equipment.includes('bathroom')
                    ? `${css.checkboxLabel} ${css.active}`
                    : css.checkboxLabel
                }
              >
                <Field
                  className="visually-hidden"
                  type="checkbox"
                  name="equipment"
                  value="bathroom"
                />
                <Icon id="bathroom" w={32} h={32} />
                Bathroom
              </label>
            </div>

            <h3 className={css.subtitle}>Vehicle type</h3>

            <div className={css.radioWrap}>
              <label
                className={
                  values.form.includes('panelTruck')
                    ? `${css.checkboxLabel} ${css.active}`
                    : css.checkboxLabel
                }
              >
                <Field
                  className="visually-hidden"
                  type="radio"
                  name="form"
                  value="panelTruck"
                />
                <Icon id="van" w={32} h={32} />
                Van
              </label>
              <label
                className={
                  values.form.includes('fullyIntegrated')
                    ? `${css.checkboxLabel} ${css.active}`
                    : css.checkboxLabel
                }
              >
                <Field
                  className="visually-hidden"
                  type="radio"
                  name="form"
                  value="fullyIntegrated"
                />
                <Icon id="fully_integrated" w={32} h={32} />
                Fully Integrated
              </label>
              <label
                className={
                  values.form.includes('alcove')
                    ? `${css.checkboxLabel} ${css.active}`
                    : css.checkboxLabel
                }
              >
                <Field
                  className="visually-hidden"
                  type="radio"
                  name="form"
                  value="alcove"
                />
                <Icon id="alcove" w={32} h={32} />
                Alcove
              </label>
            </div>

            <button className={css.btn} type="submit">
              Search
            </button>
          </aside>
        </Form>
      )}
    </Formik>
  );
};

export default FilterBar;
