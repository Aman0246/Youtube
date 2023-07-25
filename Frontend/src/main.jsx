import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import  { Toaster } from 'react-hot-toast';
import { persistor, store } from './REDUX/Store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
    <Toaster/>
    </BrowserRouter>
  </React.StrictMode>,
)

