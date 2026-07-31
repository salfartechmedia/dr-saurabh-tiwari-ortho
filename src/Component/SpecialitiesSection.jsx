import { SiSpine } from "react-icons/si";
import { GiKneeCap } from "react-icons/gi";
import { GiBrokenBone } from "react-icons/gi";
import { GiJoint } from "react-icons/gi";


import Hip from '../assets/Hip.png'
import TraumaAndFracture from '../assets/TraumaAndFracture.jpeg'
import Arthroscopic from '../assets/Arthroscopic.jpeg'
import OTbb from '../assets/gallery/OTbb.jpeg'
import OTc from '../assets/gallery/OTc.jpeg'
import OTd from '../assets/gallery/OTd.jpeg'
import OTe from '../assets/gallery/OTe.jpeg'
import OTaa from '../assets/gallery/OTaa.jpeg'
import OTi from '../assets/gallery/OTi.jpeg'
import KneeReplacementCard from '../assets/KneeReplacementCard.png'

export const specializationData = [
  {
    id: 1,
    title: "Knee Replacement",
    image:
      OTe,
      icons: <GiKneeCap />
  },
  {
    id: 2,
    title: "Total Hip Replacement",
    image:
      Hip,
      icons: <GiKneeCap />
  },
  {
    id: 3,
    title: "Arthroscopy Surgery",
    image:
      Arthroscopic,
      icons: <GiKneeCap />
  },
  {
    id: 4,
    title: "Spine Treatment",
    image:
      OTaa,
      icons: <SiSpine />
  },
  {
    id: 5,
    title: "Rehabilation",
    image:
      OTi,
      icons: <GiKneeCap />
  },
  {
    id: 6,
    title: "Trauma and Fracture",
    image:
      TraumaAndFracture,
      icons: <GiBrokenBone />
  },
  {
    id: 7,
    title: "Joint Replacement",
    image:
      OTe,
      icons: <GiJoint />
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ArrowRight } from "lucide-react";

export default function SpecialitiesSection() {
  return (
    <section className="bg-[#071B38] py-20">

      <div className="max-w-dvw mx-auto px-5">

        <div className="text-center mb-10">

          {/* <p className="text-green-500 uppercase tracking-[5px] font-semibold">
             
          </p> */}

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            My Specialities
          </h2>

        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={900}
          loop={true}
          navigation
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
            1536: {
              slidesPerView: 6,
            },
          }}
          className="mt-12"
        >
          {specializationData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="group rounded-2xl overflow-hidden bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <div className="overflow-hidden h-56">

                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 duration-500"
                  />

                </div>

                <div className="relative p-5">

                  <div className="absolute -top-6 left-5 w-12 h-12 rounded-full bg-green-500 border-4 border-white flex items-center justify-center">

                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg> */}
                    {/*  */}
                    {item.icons}

                  </div>

                  <h3 className="text-xl font-bold text-[#0A2140] mt-4 leading-snug">
                    {item.title}
                  </h3>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-14">

          <button className="group border-2 border-white rounded-full px-8 py-4 font-semibold flex items-center gap-3 bg-white text-[#071B38] duration-300">

            View All Treatments

            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 text-green-500 duration-300"
            />

          </button>

        </div>

      </div>

    </section>
  );
}