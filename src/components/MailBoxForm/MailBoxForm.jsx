
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

const mailBoxSchema = Yup.object({
  userEmail: Yup.string().email('enter your email').required('enter your email'),
  userName: Yup.string().required('enter your name'),
  favColor: Yup.string().required('enter your color').oneOf(["red", "green", "blue"])
});




const initialValues = {
  userName: "",
  userEmail: "",
  favColor: ""
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
              <span>favorit color</span>
              <br />
              <label>
                <span>Red:</span>
                <Field type="radio" name="favColor" value="red" />

              </label>
              <label>
                <span>Blue:</span>
                <Field type="radio" name="favColor" value="green" />

              </label>
              <label>
                <span>Green:</span>
                <Field type="radio" name="favColor" value="blue" />
                <ErrorMessage name='favColor'  component='p'/>
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
