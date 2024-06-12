import { NavLink, Route, Routes } from "react-router-dom";
import css from "./AppRouter.module.css";
import clsx from "clsx";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";
import Layout from "./components/Layout/Layout";

// import MailBoxPage from "./pages/MailBoxPage";
// import ProductsPage from "./pages/ProductsPage";
// import SearchPage from "./pages/SearchPage";
// import HomePage from "./pages/HomePage";
// import NotFoundPage from "./pages/NotFoundPage";
// import ProductDetailsPage from "./pages/ProductDetailsPage";

const MailBoxPage = lazy(() => import('./pages/MailBoxPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const SearchPage = lazy(() => import("./pages/SearchPage"))
const HomePage = lazy(() => import('./pages/HomePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'))



const AppRegistor = () => {
  return (
    <div>
    <Layout>
        <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/mailbox" element={<MailBoxPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId/*" element={<ProductDetailsPage />}/> 
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};

export default AppRegistor;
