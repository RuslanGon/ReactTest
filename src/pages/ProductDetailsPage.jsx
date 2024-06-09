import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { reguestProductDetailsById } from "../services/api";
import CommentsPage from "./CommentsPage";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";

const ProductDetailsPage = () => {
  const { productId } = useParams();

  const [productDetails, setProductDetails] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        setIsLoader(true);
        const data = await reguestProductDetailsById(productId);
        setProductDetails(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  return (
    <div>
      <h1>Product Details: {productId}</h1>
      {isLoader && <Loader />}
      {isError && <Error />}
      {productDetails && (
        <div>
          <img
            width={350}
            src={productDetails.thumbnail}
            alt={productDetails.title}
          />
          <h2>Title: {productDetails.title}</h2>
          <p>Price: {productDetails.price}</p>
          <p>Brand: {productDetails.brand}</p>
        </div>
      )}
      <Link to="comments">Comment</Link>
      <Routes>
        <Route path="comments" element={<CommentsPage />} />
      </Routes>
    </div>
  );
};

export default ProductDetailsPage;
