import React from "react";
import DrSaurabhLogo from '../assets/DrSaurabhLogo.png'
import { Link } from "react-router-dom";

const NAV_LINKS = [
  "Home",
  "About",
  "Specialities",
  "Consultants",
  "Gallery",
];

const SERVICES = [
  { title: "Infertility & IVF " },
  { title: "General Medicine" },
  { title: "Gynecology & Obstetrics" },

];

const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          
          {/* Hospital Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                 <img src={DrSaurabhLogo} className="w-11 h-11 flex items-center justify-center text-xl " alt="" />
              </div>

              <div>
                <h3 className="text-white font-bold text-lg">
                  Dr Saurabh Tiwari
                </h3>

                <p className="text-green-500 text-[10px] tracking-widest font-semibold">
                  Orthopedic Surgeon
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-7 mb-4">
            Dr. Saurabh Tiwari is a dedicated Orthopedic Surgeon specializing in the diagnosis and treatment of bone, joint, and spine disorders. With expertise in fracture care, joint replacement, arthroscopy, and sports injuries, he is committed to providing advanced orthopedic solutions with compassionate, patient-centered care to help individuals regain mobility and lead pain-free lives.
            </p>

            <a href="tel:+919335399454" className="text-green-500 font-bold text-xl">
              📞 +91 7983437886
            </a>

            <p className="text-slate-500 text-sm mt-1">
              24×7 Emergency Available
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 border-b border-[#FCA311]/20 pb-3">
              Quick Links
            </h4>

            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <Link to ={link}
                  key={link}
                  className="block text-slate-400 hover:text-red-600 transition-colors duration-200 text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 border-b border-[#FCA311]/20 pb-3">
              Our Specialities
            </h4>

            <div className="space-y-2">
              {/* {SERVICES.map((service) => ( */}
                <p
                  className="text-slate-400 text-sm"
                >
                  <Link to='/specialities/joint-replacement'>
                  Joint Replacement
                  </Link>
                </p>
                <p
                  className="text-slate-400 text-sm"
                >
                  <Link to='/specialities/trauma-and-fracture-care'>
                 Trauma & Fracture Care
                  </Link>
                </p>
                <p
                  className="text-slate-400 text-sm"
                >
                  <Link to='/specialities/spine-care'>
                  Spine Care
                  </Link>
                </p>
                <p
                  className="text-slate-400 text-sm"
                >
                  <Link to='/specialities/arthroscopy'>
                  Arthroscopy
                  </Link>
                </p>
              {/* ))} */}
            </div>
          </div>

          {/* OPD Timing */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 border-b border-[#FCA311]/20 pb-3">
              OPD Timing
            </h4>

            <div className="space-y-4">
              <div>
                <p className="text-slate-500 text-xs font-semibold">
                  Monday – Saturday
                </p>

                <p className="text-green-500 font-bold">
                  9:00 AM – 2:00 PM
                </p>
              </div>

              <div>
                <p className="text-slate-500 text-xs font-semibold">
                  Monday – Saturday
                </p>

                <p className="text-green-500 font-bold">
                  5:00 PM – 8:00 PM
                </p>
              </div>

              <div>

                <p className="text-red-600 font-bold">
                  Emergency 24x7
                </p>
                {/* <p className="text-slate-500 text-xs font-semibold">
                  24x7
                </p> */}
              </div>
            </div>

            <div className="mt-5 bg-cyan-500/20 border rounded-xl p-4">
              <p className="text-white text-lg font-bold">
              Location
              </p>

              <a href="https://maps.app.goo.gl/89PeiziiyqMBSX4D8" target="_blank" className="text-cyan text-white text-sm">
                Jeevan Jyoti hospital, Bai ka Bagh, Prayagraj - 211003
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FCA311]/50 pt-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2026 Dr Saurabh Tiwari. All Rights Reserved.
          </p>

          {/* <p className="text-slate-500 text-sm text-center md:text-right">
            Designed & Developed by{" "}
            <span className="text-red-600 font-semibold">
              Salfartech
            </span>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;