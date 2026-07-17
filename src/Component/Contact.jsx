import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Navigation,
  CalendarDays,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  function useReveal() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setVisible(true); },
        { threshold: 0.12 }
      );
      if (ref.current) obs.observe(ref.current);
      return () => obs.disconnect();
    }, []);
    return [ref, visible];
  }

  /* ─── REVEAL WRAPPER ─── */
  function Reveal({ children, delay = 0, className = "" }) {
    const [ref, visible] = useReveal();
    return (
      <div
        ref={ref}
        className={className}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        }}
      >
        {children}
      </div>
    );
  }
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="mb-12">
          <Reveal>


            <p className="uppercase tracking-[5px] text-[#FCA311] font-semibold">
              Get In Touch
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-3">
              Hospital Location & Contact
            </h2>

            <p className="text-gray-600 mt-5 max-w-3xl">
              Visit Jeevan Jyoti Hospital for quality healthcare. Find our
              location, contact details, and clinic timings below.
            </p>

          </Reveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left */}

          <div className="lg:col-span-2">
            <Reveal>


              <div className="rounded-3xl overflow-hidden shadow-xl border">

                <iframe
                  src="https://www.google.com/maps/place/Dr.+Saurabh+Tiwari+%E2%80%93+Orthopedic+Surgeon+%7C+Jeevan+Jyoti+Hospital,+Prayagraj/@25.4363057,81.8466297,17z/data=!3m1!4b1!4m6!3m5!1s0x3985356429a9b1c1:0x277b4de2774fb785!8m2!3d25.4363057!4d81.8466297!16s%2Fg%2F11zk6nylb9?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
                  className="w-full h-[500px]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>

              </div>

              <div className="bg-[#0B1F3A] rounded-3xl mt-6 p-8">

                <div className="flex items-start gap-4">

                  <div className="bg-[#FCA311] p-3 rounded-xl">

                    <MapPin className="text-white" size={22} />

                  </div>

                  <div>

                    <h4 className="text-white text-xl font-semibold">
                      Jeevan Jyoti Hospital
                    </h4>

                    <p className="text-white/80 mt-2 leading-7">
                      Bai ka Bagh, prayagraj
                    </p>

                  </div>

                </div>

                <a
                  href="https://maps.app.goo.gl/k3aK3Vujvvvc58PH6"
                  target="_blank"
                  className="inline-flex items-center gap-2 mt-6 bg-[#FCA311] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 duration-300"
                >
                  <Navigation size={18} />
                  Get Directions
                </a>

              </div>
            </Reveal>

          </div>

          {/* Right */}

          <div className="space-y-6">
            <Reveal>


              {/* Address */}

              <div className="border rounded-3xl p-6 shadow-lg">

                <div className="flex gap-5">

                  <div className="bg-[#0B1F3A] w-14 h-14 rounded-2xl flex items-center justify-center">

                    <MapPin className="text-[#FCA311]" />

                  </div>

                  <div>

                    <h5 className="font-bold text-[#0B1F3A]">
                      Hospital Address
                    </h5>

                    <p className="text-gray-600 mt-2">
                      Jeevan Jyoti Hospial, Bai ka Bagh, prayagraj - 211003
                    </p>

                  </div>

                </div>

          </div>
            </Reveal>

          {/* Phone */}

          <div className="border rounded-3xl p-6 shadow-lg">
            <Reveal>


              <div className="flex gap-5">

                <div className="bg-[#0B1F3A] w-14 h-14 rounded-2xl flex items-center justify-center">

                  <Phone className="text-[#FCA311]" />

                </div>

                <div>

                  <h5 className="font-bold text-[#0B1F3A]">
                    Phone
                  </h5>

                  <p className="text-gray-600 mt-2">
                    +91 7983437886
                  </p>

                </div>

              </div>

            </Reveal>
          </div>

          {/* Email */}

          <div className="border rounded-3xl p-6 shadow-lg">
            <Reveal>


              <div className="flex gap-5">

                <div className="bg-[#0B1F3A] w-14 h-14 rounded-2xl flex items-center justify-center">

                  <Mail className="text-[#FCA311]" />

                </div>

                <div>

                  <h5 className="font-bold text-[#0B1F3A]">
                    Email
                  </h5>

                  <p className="text-gray-600 mt-2 break-all">
                    hospitalabhayjeevan@gmail.com
                  </p>

                </div>

              </div>
            </Reveal>

          </div>

          {/* Timing */}

          <div className="border rounded-3xl p-6 shadow-lg">
            <Reveal>


              <div className="flex gap-5">

                <div className="bg-[#0B1F3A] w-14 h-14 rounded-2xl flex items-center justify-center">

                  <Clock3 className="text-[#FCA311]" />

                </div>

                <div>

                  <h5 className="font-bold text-[#0B1F3A]">
                    Clinic Hours
                  </h5>

                  <p className="text-gray-600 mt-2">
                    Monday - Sunday
                    <br />
                    24×7 Emergency Services
                  </p>

                </div>

              </div>
            </Reveal>

          </div>

          {/* Buttons */}

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">

            <a
              href="tel:+917983437886"
              className="bg-[#0B1F3A] text-white rounded-xl py-4 text-center font-semibold hover:bg-[#FCA311] duration-300"
            >
              Call Now
            </a>

            <a
              href="mailto:drsaurabhtiwari1994@gmail.com"
              className="border-2 border-[#0B1F3A] text-[#0B1F3A] rounded-xl py-4 text-center font-semibold hover:bg-[#0B1F3A] hover:text-white duration-300"
            >
              Email
            </a>

            <a
              href="https://wa.me/917983437886"
              className="bg-green-500 text-white rounded-xl py-4 text-center font-semibold hover:bg-[#0B1F3A] duration-300"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </div>

    </div>
    </section >
  );
}