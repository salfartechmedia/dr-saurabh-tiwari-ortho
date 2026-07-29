import React from 'react'
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import Hero from './Hero'
// import Consultant from '../Page/Consultant'
import GalleryHome from './GalleryHome'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
// import PreFooterCTA from './PreFooterCTA'
import HospitalPhotoBanner from './HospitalPhotoBanner'
import Contact from './Contact'
import SpecialtiesSection from './SpecialitiesSection'
import BreadCrumb from './BreadCrumb'
import AppointmentCTA from './AppointmentCTA'
import InstagramFeed from './InstagramFeed'
import GoogleReviews from './GoogleReview'

// import AppBread from './Breadcrumb'

const Home = () => {
  return (
    <>
      {/* <BreadCrumb/> */}

      {/* <Hero/> */}
      <HeroSection />
      <AboutSection />
      <GalleryHome />
      <InstagramFeed />

      <SpecialtiesSection />
      <AppointmentCTA />

      <GoogleReviews />
      <Contact />
      {/* <HospitalPhotoBanner/> */}

      {/* <Footer/> */}
    </>
  )
}

export default Home