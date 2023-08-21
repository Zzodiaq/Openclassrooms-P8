import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/index.jsx'
import About from './pages/About/about.jsx'
import Error from './pages/Error/error.jsx'
import FicheLogement from './pages/FicheLogment/ficheLogment.jsx'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'

const HeaderWraper = ({child}) => (
    <>
    <Header/>
    {child}

    </>
    )

const router = createBrowserRouter([
  {
    path: "/",
    element : <><HeaderWraper/><Home /><Footer/></>,
    errorElement: <Error />,
  },
  {
    path: "/logement/:id",
    element : <><HeaderWraper/><FicheLogement /><Footer/></>,
    errorElement: <Error />,
  },
  {
    path: "/logement",
    element : <><HeaderWraper/><FicheLogement /><Footer/></>,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element : <><HeaderWraper /><About /><Footer/></>,
    errorElement: <Error />,
  },
  {
    path: "/ficheLogement",
    element : <><HeaderWraper /><FicheLogement /><Footer/></>,
    errorElement: <Error />,
  }
  ]
)
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)