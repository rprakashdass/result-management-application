import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// css
import './index.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


// Components
import SubjectList from './components/createSubjects.jsx'
import ShowSubjectsList from './components/showSubjects.jsx';


<script src="http://localhost:8097"></script>

// Routes
const router = createBrowserRouter([
  {path :'/', element: <App/>},
  {path : '/subjects', element: <SubjectList/>},
  {path : 'subjects/show/', element: <ShowSubjectsList/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)