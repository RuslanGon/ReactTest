import { Field, Form, Formik } from "formik"


const initialValues = {
  userEmail: "",
  userName: "",
};

const MailBoxForm = ({onAddUser}) => {

// const handleSubmit = (event) => {
//     event.preventDefault()
//     const userEmail = event.currentTarget.elements.userEmail.value
//     const userName = event.currentTarget.elements.userName.value

//     const formData = {
//       userEmail,
//       userName,
//     };
    // console.log(formData);

    // onAddUser(formData)
    
    // event.currentTarget.reset()
// }

const handleSubmit = (values, actions) => {
  console.log(values);
  actions.resetForm();
};

  return (
    <div>
      <Formik initialValues={{initialValues}} onSubmit={handleSubmit}>
        <Form>
          <h2>Add new email user</h2>
          <label>
            <span>User email</span>
            <br />
            <Field type="email" name="userEmail" placeholder="enter your email" />
          </label>
          <br />
          <label>
            <span>User name</span>
            <br />
            <Field type="text" name="userName" placeholder="enter your name" />
          </label>
          <br />
          <button type="submit">Add user</button>
        </Form>
      </Formik>
    </div>
  );
}

export default MailBoxForm