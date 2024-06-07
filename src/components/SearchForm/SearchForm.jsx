import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const searchProductsSchema = Yup.object({
  searchTerm: Yup.string().required('Search term is required')
});

const initialValues = {
  searchTerm: ""
};

const SearchForm = ({ onSetSearchQuery }) => {
  const handleSubmit = (values) => {
    onSetSearchQuery(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={searchProductsSchema}>
          <Form>
            <h2>Search products by name or brand</h2>
            <label>
              <Field type="text" name="searchTerm" placeholder="query..." />
              <ErrorMessage name="searchTerm" component="p" />
            </label>
            <br />
            <button type="submit">Search product</button>
          </Form>
      </Formik>
    </div>
  );
};

export default SearchForm;
