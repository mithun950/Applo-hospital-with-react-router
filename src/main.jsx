import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/Home/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Doctors from './Components/Doctors/Doctors.jsx';
import About from './Components/About/About.jsx';
import Diagonistic from './Components/Diagonistic/Diagonistic.jsx';
import Contact from './Components/Contact/Contact.jsx';
import DoctorDetail from './Components/DoctorDetail/DoctorDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children: [
      {
        path: "/doctors",
        loader: () => fetch('/DoctorData/DoctorData.json'),
        element: <Doctors></Doctors>,
      },
      {
        path: "/about",
        element:<About></About>,
      },
      {
        path: "/diagnostic",
        element:<Diagonistic></Diagonistic>,
      },
      {
        path: "/contact",
        element:<Contact></Contact>,
      },
      {
        path: "/doctorDetail/:id",
        loader: ({params}) => fetch(`http://localhost:5174/doctors/doctor/${params.id}`),
        element: <DoctorDetail></DoctorDetail>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
