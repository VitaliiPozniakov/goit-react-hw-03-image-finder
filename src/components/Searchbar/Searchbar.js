import React from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ImSearch } from "react-icons/im";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  query: yup.string().max(32).trim().matches(),
});

const initialValues = {
  query: '',
};

const Searchbar = ({ onSubmitProp }) => {

  const handleSubmit = (values, actions) => {
    const { query } = values;

    if (query.trim() === ''){
      return  toast.warn('Please enter your request!');
    }
    onSubmitProp(query);
    actions.resetForm();
  };

  return (
<header className={css.searchbar}>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className={css.searchform}>
      <button type="submit" className={css.searchformButton}>
      {/* <span className={css.searchformButtonLabel}>Search</span> */}
      <ImSearch style={{ color: '#3f51b5'}}/>
    </button>
   
          <Field type="text" name="query" autoComplete="off"
      autoFocus
      placeholder="Search images and photos" className={css.searchformInput} />
          <ErrorMessage name="query" component="span" className={css.error} />
       
      </Form>
    </Formik>
    </header>
  );
};

export default Searchbar;

Searchbar.prototype = {
  onSubmitProp: PropTypes.func.isRequired,
};

