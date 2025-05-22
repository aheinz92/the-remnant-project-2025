import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'; // Import ScrollToTop
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/styles/custom.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename="/The-Remnant-Project"> {/* Wrap App with BrowserRouter */}
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)