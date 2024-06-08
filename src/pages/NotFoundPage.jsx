import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2>Page you visit is error</h2>
      <Link to='/'>Go home</Link>
    </div>
  );
};

export default NotFoundPage;
