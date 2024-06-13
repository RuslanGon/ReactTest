import clsx from "clsx";
import css from "../../AppRouter.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsSignedIn } from "../../redux/auth/selectors";

const getLinkStyle = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Layout = ({ children }) => {
  const isSignedIn = useSelector(selectIsSignedIn);

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
