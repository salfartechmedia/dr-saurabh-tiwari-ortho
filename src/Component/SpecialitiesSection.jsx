export const specializationData = [
  {
    id: 1,
    title: "Knee Replacement",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
  },
  {
    id: 2,
    title: "Hip Replacement",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800",
  },
  {
    id: 3,
    title: "Arthroscopy Surgery",
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800",
  },
  {
    id: 4,
    title: "Spine Treatment",
    image:
      "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=800",
  },
  {
    id: 5,
    title: "Fracture Care",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
  },
  {
    id: 6,
    title: "Sports Injury",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
  },
  {
    id: 7,
    title: "Shoulder Surgery",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800",
  },
  {
    id: 8,
    title: "Joint Pain",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
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

      <div className="max-w-7xl mx-auto px-5">

        <h4 className="text-center uppercase tracking-[4px] text-white font-semibold mb-2">
          Our
          <span className="text-green-500"> Specializations</span>
        </h4>

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

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>

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

          <button className="group border-2 border-white rounded-full px-8 py-4 text-white font-semibold flex items-center gap-3 hover:bg-white hover:text-[#071B38] duration-300">

            View All Treatments

            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 duration-300"
            />

          </button>

        </div>

      </div>

    </section>
  );
}