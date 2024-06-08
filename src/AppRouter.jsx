import { NavLink, Route, Routes } from "react-router-dom";
import css from "./AppRouter.module.css";
import clsx from "clsx";
import MailBoxPage from "./pages/MailBoxPage";
import ProductsPage from "./pages/ProductsPage";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const getLinkStyle = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const AppRouter = () => {
  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getLinkStyle} to="/"> HomePage</NavLink>
          <NavLink className={getLinkStyle} to="/mailbox"> MailBox</NavLink>
          <NavLink className={getLinkStyle} to="/products">Products</NavLink>
          <NavLink className={getLinkStyle} to="/search">Search</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mailbox" element={<MailBoxPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId/*" element={<ProductDetailsPage />}/> 
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default AppRouter;
