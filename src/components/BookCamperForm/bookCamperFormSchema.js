import * as Yup from 'yup';

const bookCamperFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'The name is too short')
    .max(50, 'The name is too long')
    .required('Name required'),
  email: Yup.string().email('Incorrect email').required('Email required'),
  bookingDate: Yup.date()
    .nullable()
    .required('Booking date required')
    .min(new Date(), 'The date cannot be in the past'),
  comment: Yup.string().max(200, 'The comment must not exceed 200 characters'),
});

export default bookCamperFormSchema;
