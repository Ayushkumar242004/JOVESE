import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../src/components/store/auth';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <AuthProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
          <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              bodyClassName="toastBody"
              />
        </BrowserRouter>, 
      </React.StrictMode>
    </AuthProvider>
)
