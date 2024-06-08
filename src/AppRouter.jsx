import { NavLink, Route, Routes } from "react-router-dom"
import css from './AppRouter.module.css'
import clsx from "clsx"
import MailBoxPage from "./pages/MailBoxPage"
import ProductsPage from "./pages/ProductsPage"
import SearchPage from "./pages/SearchPage"


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
      <main>
        <Routes>
          <Route path="/mailbox" element={<MailBoxPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default AppRouter