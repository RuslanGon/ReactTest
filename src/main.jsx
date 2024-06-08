// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import AppRouter from './AppRouter.jsx'
import { BrowserRouter } from 'react-router-dom'
// import AppHTTPSearch from './AppHTTPSearch.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
  {/* // <AppHTTPSearch /> */}
    {/* // <App /> */}
    <AppRouter />
    </BrowserRouter>
  // </React.StrictMode>,
)
