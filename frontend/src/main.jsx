import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SubjectList from './components/subjectList.jsx'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";


// css
import './index.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Routes
const router = createBrowserRouter([
  {path :'/', element: <App/>},
  {path : '/subjects', element: <SubjectList/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)