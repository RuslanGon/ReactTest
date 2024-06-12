import clsx from "clsx";
import css from "../../AppRouter.module.css";
import { NavLink } from "react-router-dom";


const getLinkStyle = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });

const Layout = ({children}) => {

  return (
    <div>
        <header>
        <nav className={css.nav}>
          <NavLink className={getLinkStyle} to="/"> HomePage</NavLink>
          <NavLink className={getLinkStyle} to="/register">Registration</NavLink>
          <NavLink className={getLinkStyle} to="/login">Login</NavLink>
          <NavLink className={getLinkStyle} to="/contacts">Contacts</NavLink>
          <NavLink className={getLinkStyle} to="/mailbox"> MailBox</NavLink>
          <NavLink className={getLinkStyle} to="/products">Products</NavLink>
          <NavLink className={getLinkStyle} to="/search">Search</NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout