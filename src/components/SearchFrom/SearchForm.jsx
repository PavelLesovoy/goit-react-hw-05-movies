import css from './SearchForm.module.css';
import { Form, Formik, Field } from 'formik';
import PropTypes from 'prop-types';

export const SearchForm = ({ value, onSubmit }) => {
  const handleSabmit = ({ movie }) => {
    onSubmit(movie);
  };

  return (
    <div>
      <Formik initialValues={{ movie: value }} onSubmit={handleSabmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="movie"
            placeholder="Movie Title"
            required
          />
          <button type="submit" className={css.button}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

SearchForm.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
};
