import { NavLink } from "react-router-dom"
import css from './AppRouter.module.css'
import clsx from "clsx"


const getLinkStyle = ({isActive}) => clsx(css.navLink, {
  [css.active] : isActive,
})


const AppRouter = () => {
  return (
    <div>
      <header>
        <nav className={css.nav}>
        <NavLink className={getLinkStyle} to='/mailbox'>MailBox</NavLink>
        <NavLink className={getLinkStyle} to='/products'>Products</NavLink>
        <NavLink className={getLinkStyle} to='/search'>Search</NavLink>
        </nav>
      </header>
    </div>
  )
}

export default AppRouter