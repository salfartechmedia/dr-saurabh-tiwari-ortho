import React from 'react'
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import Hero from './Hero'
import Consultant from '../Page/Consultant'
import GalleryHome from './GalleryHome'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import PreFooterCTA from './PreFooterCTA'
import HospitalPhotoBanner from './HospitalPhotoBanner'
import Contact from './Contact'
// import BreadCrumb from './BreadCrumb'

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
      {/* <!-- Elfsight Google Reviews | Untitled Google Reviews --> */}

      <div className='m-10'>
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div class="elfsight-app-4e6e246f-3a88-44d1-811f-94b962667e51" data-elfsight-app-lazy></div>
      </div>
      <Consultant />
      <PreFooterCTA />
      <Contact />
      {/* <HospitalPhotoBanner/> */}


      {/* <Footer/> */}
    </>
  )
}

export default Home