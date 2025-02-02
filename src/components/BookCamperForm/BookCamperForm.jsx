import { Field, Form, Formik, ErrorMessage } from 'formik';
import css from './BookCamperForm.module.css';
import bookCamperFormSchema from './BookCamperFormSchema';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';
import toast from 'react-hot-toast';

const BookCamperForm = () => {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: null,
    comment: '',
  };

  const handleSubmit = (values, actions) => {
    toast.success('Form submitted successfully!');
    actions.resetForm();
  };

  return (
    <div className={css.formWrap}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={bookCamperFormSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className={css.form}>
            <label className={css.label}>
              <Field
                className={css.input}
                type="text"
                name="name"
                placeholder="Name*"
              />
              <ErrorMessage component="div" className={css.error} name="name" />
            </label>
            <label className={css.label}>
              <Field
                className={css.input}
                type="email"
                name="email"
                placeholder="Email*"
              />
              <ErrorMessage
                component="div"
                className={css.error}
                name="email"
              />
            </label>
            <label className={css.label}>
              <DatePicker
                selected={values.bookingDate}
                onChange={date => setFieldValue('bookingDate', date)}
                dateFormat="dd/MM/yyyy"
                className={css.input}
                calendarStartDay={1}
                placeholderText="Booking date*"
              />
              <ErrorMessage
                component="div"
                className={css.error}
                name="bookingDate"
              />
            </label>
            <label className={css.label}>
              <Field
                className={`${css.input} ${css.textarea}`}
                as="textarea"
                name="comment"
                placeholder="Comment"
              />
              <ErrorMessage
                component="div"
                className={css.error}
                name="comment"
              />
            </label>

            <button className={css.btn} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookCamperForm;
