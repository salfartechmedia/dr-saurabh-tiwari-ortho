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

      <SpecialtiesSection />
      <AppointmentCTA />

      {/* <!-- Elfsight Google Reviews | Untitled Google Reviews --> */}
      {/* <script src="https://elfsightcdn.com/platform.js" async></script>
      <div class="elfsight-app-ddb813d5-5c55-4316-ab25-635783e96df6" data-elfsight-app-lazy></div> */}

      {/* <!-- Elfsight Instagram Feed | Untitled Instagram Feed --> */}

      {/* <script src="https://elfsightcdn.com/platform.js" async></script>
        <div class="elfsight-app-1cfb2e0f-7a1e-459f-966b-63ce648d3d28" data-elfsight-app-lazy></div> */}
      <GoogleReviews />
      <InstagramFeed />
      <Contact />
      {/* <HospitalPhotoBanner/> */}

      {/* <Footer/> */}
    </>
  )
}

export default Home