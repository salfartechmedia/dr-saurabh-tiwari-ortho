import React from 'react'
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import Hero from './Hero'
// import Consultant from '../Page/Consultant'
import GalleryHome from './GalleryHome'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import PreFooterCTA from './PreFooterCTA'
import HospitalPhotoBanner from './HospitalPhotoBanner'
import Contact from './Contact'
import SpecialtiesSection from './SpecialitiesSection'
import BreadCrumb from './BreadCrumb'
import AppointmentCTA from './AppointmentCTA'

// import AppBread from './Breadcrumb'

const Home = () => {
  return (
    <>
      {/* <NavigationBar/> */}
      {/* <AppBre1ad/> */}
      {/* <BreadCrumb/> */}

      {/* <Hero/> */}
      <HeroSection />
      <AboutSection />
      <GalleryHome />

      <SpecialtiesSection />
      {/* <Consultant /> */}
      <AppointmentCTA />

      {/* <!-- Elfsight Google Reviews | Untitled Google Reviews --> */}
      <script src="https://elfsightcdn.com/platform.js" async></script>
      <div class="elfsight-app-ddb813d5-5c55-4316-ab25-635783e96df6" data-elfsight-app-lazy></div>

      {/* <PreFooterCTA /> */}
      <Contact />
      {/* <HospitalPhotoBanner/> */}


      {/* <Footer/> */}
    </>
  )
}

export default Home