import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/Store.js'
import {Toaster} from "react-hot-toast"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster/>
    </Provider>
  </BrowserRouter>
)
