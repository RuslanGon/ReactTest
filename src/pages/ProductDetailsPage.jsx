import { Suspense, lazy, useEffect, useRef} from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
// import { reguestProductDetailsById } from "../services/api";
const CommentsPage = lazy(() => import("./CommentsPage"))
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import { useDispatch, useSelector } from "react-redux";
import { apiReguestProductDetailsById } from "../redux/productDetails/operation";
import { selectProductDetails, selectProductDetailsIsError, selectProductDetailsIsLoading } from "../redux/productDetails/selectors";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch()
  const productDetails = useSelector(selectProductDetails)
  const isLoader = useSelector(selectProductDetailsIsLoading)
  const isError = useSelector(selectProductDetailsIsError)
  
  const location = useLocation()
  const backLinkRef = useRef(location.state ?? '/')

  useEffect(() => {
    dispatch(apiReguestProductDetailsById(productId))
  }, [dispatch, productId])

  // useEffect(() => {
  //   async function fetchProductDetails() {
  //     try {
  //       setIsLoader(true);
  //       const data = await reguestProductDetailsById(productId);
  //       setProductDetails(data);
  //     } catch (error) {
  //       setIsError(true);
  //     } finally {
  //       setIsLoader(false);
  //     }
  //   }

  //   if (productId) {
  //     fetchProductDetails();
  //   }
  // }, [productId]);

  return (
    <div>
      <h1>Product Details: {productId}</h1>
      <Link to={backLinkRef.current}>Go back</Link>
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

      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="comments" element={<CommentsPage />} />
      </Routes>
      </Suspense>
    </div>
  );
};

export default ProductDetailsPage;
