import styles from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must not exceed 50 characters'),
  number: Yup.string()
    .required('Phone number is required')
    .min(3, 'Phone number must be at least 3 characters')
    .max(15, 'Phone number must not exceed 15 characters'),
});

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div>
          <label htmlFor="number">Phone Number:</label>
          <Field type="text" id="number" name="number" />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
