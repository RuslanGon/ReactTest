// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './AppRouter.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'  
import { store } from './redus/store.js'

// import App from './App.jsx'
// import AppHTTPSearch from './AppHTTPSearch.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      {/* <AppHTTPSearch /> */}
      {/* <App /> */}
      <AppRouter />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
)
