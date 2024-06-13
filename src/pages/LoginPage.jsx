import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";

import * as Yup from "yup";
import { apiLogin } from "../redux/auth/authSlice";

const loginSchema = Yup.object({
    email: Yup.string().email("enter your email").required("enter your email"),
    password: Yup.string().required("enter your password")
});

const initialValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
const dispatch = useDispatch()

  const handleSubmit = (values, actions) => {
    dispatch(apiLogin(values))
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        {() => (
          <Form>
            <h2>Login user</h2>
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
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
