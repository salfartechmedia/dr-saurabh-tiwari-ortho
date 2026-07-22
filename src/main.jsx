import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Component/Home.jsx'
import About from './Page/About.jsx'
import BookAppointment from './Page/BookAppointment.jsx'
import OurSpecialities from './Page/OurSpecialities.jsx'
import Consultant from './Page/Consultant.jsx'
import Contact from './Page/Contact.jsx'
import ContactForm from './Page/ContactForm.jsx'
import AbhayJeevanGallery from './Page/AbhayJeevanGallery.jsx'
import GalleryPremium from './Page/GalleryPremium.jsx'
import JointReplacement from './Page/Specialities/JointReplacement.jsx'
import KneeReplacement from './Page/Specialities/KneeReplacement.jsx'
import HipReplacement from './Page/Specialities/HipReplacement.jsx'
import TraumaAndFractures from './Page/Specialities/TraumaAndFractures.jsx'
import Rehabilation from './Page/Specialities/Rehabilation.jsx'
import MinimalInvasiveSurgery from './Page/Specialities/MinimalInvasiveSurgery.jsx'
import SpineSurgery from './Page/Specialities/SpineSurgery.jsx'
import Arthroscopy from './Page/Specialities/Arthroscopy.jsx'
// import { BrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <><App/></>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'book-appointment',
        element: <ContactForm/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'gallery',
        element: <GalleryPremium/>
      },
      // {
      //   path: 'specialities',
      //   element: <OurSpecialities/>
      // },
      // {
      //   path: 'contact',
      //   element: <Contact/>
      // },
      {
        path: 'specialities/joint-replacement',
        element: <JointReplacement/>
      },
      {
        path: 'specialities/knee-replacement',
        element: <KneeReplacement/>
      },
      {
        path: 'specialities/hip-replacement',
        element: <HipReplacement/>
      },
      {
        path: 'specialities/trauma-and-fracture',
        element: <TraumaAndFractures/>
      },
      {
        path: 'specialities/Rehabilation',
        element: <Rehabilation/>
      },
      {
        path: 'specialities/minimal-invasive-surgery',
        element: <MinimalInvasiveSurgery/>
      },
      {
        path: 'specialities/spine-surgery',
        element: <SpineSurgery/>
      },
      {
        path: 'specialities/arthroscopy',
        element: <Arthroscopy/>
      },
      // {
      //   path: 'specialities/general-surgery',
      //   element: <GeneralSurgery/>
      // },
      // {
      //   path: 'specialities/plastic-and-reconstructive-surgery',
      //   element: <PlasticAndReconstructiveSurgery/>
      // },
    ]
  }
])
createRoot(document.getElementById('root')).render(
    // <BrowserRouter>
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
    // </BrowserRouter>11
)
