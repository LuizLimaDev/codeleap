import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom';
import router from '../routes'
import '../index.css'
import App from './App.jsx'
import store from './Store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
      <App />
    </Provider>
  </React.StrictMode>,
)
