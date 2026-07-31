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
import SEO from "../components/SEO";

// import AppBread from './Breadcrumb'

const Home = () => {
  return (
    <>
      {/* <BreadCrumb/> */}
      <SEO
        title="Dr. Saurabh Tiwari | Best Orthopedic Surgeon in Prayagraj"
        description="Consult Dr. Saurabh Tiwari, experienced orthopedic surgeon in Prayagraj for joint replacement, knee replacement, hip replacement, trauma care, sports injuries and spine treatment."
        keywords="Orthopedic Surgeon Prayagraj, Knee Replacement, Hip Replacement, Joint Replacement, Spine Surgeon, Bone Doctor"
        canonical="https://drsaurabhtiwariortho.com/"
        image="https://drsaurabhtiwari.com/og-image.jpg"
      />

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