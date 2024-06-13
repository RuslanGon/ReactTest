import clsx from "clsx";
import css from "../../AppRouter.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsSignedIn, selectUserData } from "../../redux/auth/selectors";
import { apiLogOut } from "../../redux/auth/authSlice";

const getLinkStyle = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Layout = ({ children }) => {
  const dispatch = useDispatch
  const isSignedIn = useSelector(selectIsSignedIn);
  const userData = useSelector(selectUserData)

  const onLogOut = () => {
dispatch(apiLogOut())
  }

  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getLinkStyle} to="/">
            {" "}
            HomePage
          </NavLink>
          {isSignedIn ? (
            <>
              {" "}
              <NavLink className={getLinkStyle} to="/contacts">
                Contacts
              </NavLink>
              <NavLink className={getLinkStyle} to="/mailbox">
                {" "}
                MailBox
              </NavLink>
              <NavLink className={getLinkStyle} to="/products">
                Products
              </NavLink>
              <NavLink className={getLinkStyle} to="/search">
                Search
              </NavLink>
              <div>
                <span>Hello {userData.name}</span>
                <button onClick={onLogOut} type="button">LogOut</button>
              </div>
            </>
          ) : (
            <>
              <NavLink className={getLinkStyle} to="/register">
                Registration
              </NavLink>
              <NavLink className={getLinkStyle} to="/login">
                Login
              </NavLink>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
