// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import AppRouter from './AppRouter.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'  
import { persistor, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import AppRegistor from './AppRegistor.jsx'

// import App from './App.jsx'
// import AppHTTPSearch from './AppHTTPSearch.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <BrowserRouter>
      {/* <AppHTTPSearch /> */}
      {/* <App /> */}
      {/* <AppRouter /> */}
      <AppRegistor />
    </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
)
