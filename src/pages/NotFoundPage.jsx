
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const NotFoundPage = () => {
const [timer, setTimer] = useState(0)

useEffect(() => {
  const intevalId = setInterval(() => {
setTimer(timer => timer + 1)
  },1000)
  return () => clearInterval(intevalId)
}, [])

if(timer === 5) {
  return <Navigate to='/' replace />
}

  return (
    <div>
      <h2>Page you visit is error</h2>
      <h3>you will be redirected to home {5 - timer} seconds</h3>
      <Link to='/'>Go home</Link>
    </div>
  );
};

export default NotFoundPage;
