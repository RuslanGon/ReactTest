import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { reguestProductDetailsById } from "../services/api";
import CommentsPage from "./CommentsPage";


const ProductDetailsPage = () => {
  const { productId } = useParams();

  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const data = await reguestProductDetailsById(productId);
        setProductDetails(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    }

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  return (
    <div>
      <h1>Product Details: {productId}</h1>
      {productDetails && (
        <div>
          <img width={350} src={productDetails.thumbnail} alt={productDetails.title} />
          <h2>Title: {productDetails.title}</h2>
          <p>Price: {productDetails.price}</p>
          <p>Brand: {productDetails.brand}</p>
        </div>
      )}
      <Link to='comments'>Comment</Link>
      <Routes>
      <Route path="comments" element={<CommentsPage />} />
      </Routes>
    </div>
  );
};

export default ProductDetailsPage;
