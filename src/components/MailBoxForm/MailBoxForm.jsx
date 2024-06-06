
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

const mailBoxSchema = Yup.object({
  userEmail: Yup.string().email('enter your email').required('enter your email'),
  userName: Yup.string().required('enter your name')
});




const initialValues = {
  userName: "",
  userEmail: "",
};


const MailBoxForm = ({ onAddUser }) => {
  const handleSubmit = (values, actions) => {
    onAddUser(values);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={mailBoxSchema}
      >
        {() => (
          <Form>
            <h2>Add new email user</h2>
            <label>
              <span>User email</span>
              <br />
              <Field type="email" name="userEmail" placeholder="Enter your email" />
              <ErrorMessage name='userEmail'  component='p'/>
            </label>
            <br />
            <label>
              <span>User name</span>
              <br />
              <Field type="text" name="userName" placeholder="Enter your name" />
              <ErrorMessage name='userName'  component='p'/>
            </label>
            <br />
            <button type="submit">Add user</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MailBoxForm;
