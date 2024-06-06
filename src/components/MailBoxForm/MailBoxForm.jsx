
import { Formik, Form, Field } from 'formik';

const initialValues = {
  username: "",
  email: "",
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
      >
        {() => (
          <Form>
            <h2>Add new email user</h2>
            <label>
              <span>User email</span>
              <br />
              <Field type="email" name="userEmail" placeholder="Enter your email" />
            </label>
            <br />
            <label>
              <span>User name</span>
              <br />
              <Field type="text" name="userName" placeholder="Enter your name" />
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
