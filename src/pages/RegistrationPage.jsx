import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";

import * as Yup from "yup";
import { apiRegistor } from "../redux/auth/authSlice";

const registorSchema = Yup.object({
    email: Yup.string().email("enter your email").required("enter your email"),
    name: Yup.string().required("enter your name"),
    password: Yup.string().required("enter your password")
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationPage = () => {
    
    const dispatch = useDispatch()

  const handleSubmit = (values, actions) => {
    dispatch(apiRegistor(values))
    actions.resetForm();
  };

  

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registorSchema}
      >
        {() => (
          <Form>
            <h2>Registor user</h2>
            <label>
              <span>Email:</span>
              <br />
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="p" />
            </label>
            <br />
            <label>
              <span>Name:</span>
              <br />
              <Field
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <ErrorMessage name="name" component="p" />
            </label>
            <br />
            <label>
              <span>Password:</span>
              <br />
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="p" />
            </label>
            <br />
            <button type="submit">Registor</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationPage;
