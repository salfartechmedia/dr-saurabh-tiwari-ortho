import { useState } from "react";
import {
  FaHospital,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const hospitals = [
  {
    id: 1,
    name: "Shubh Ortho Clinic",
    address:
      "BS C-37, Barsana Sector, Kalindipuram, Prayagraj, Daiwghat, Uttar Pradesh 211011",
    phone: "+91 7983437886",
    email: "drsaurabhtiwariortho@gmail.com",
    timing: "Mon - Sat : 07:00 AM - 09:00 AM, 06:00 PM - 08:00 PM",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.351195320277!2d81.7847297!3d25.426519700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398535597408564d%3A0xe4b4063ad5a7972f!2sDr%20Saurabh-%20Shubh%20Ortho%20Clinic!5e0!3m2!1sen!2sin!4v1785266478073!5m2!1sen!2sin", // Map 1
  },
  {
    id: 2,
    name: "Jeevan Jyoti Hospital",
    address:
      "162, Lowther Rd, Himmat Ganj, Bai Ka Bagh, Prayagraj, Uttar Pradesh 211003",
    phone: "+91 7983437886",
    email: "drsaurabhtiwariortho@gmail.com",
    timing: "Mon - Sun : 05:00 PM - 06:00 PM",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.058149123799!2d81.84658139999999!3d25.4363194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acab52d38021f%3A0x7a5c69d06d09297b!2z8J2XnfCdl7LwnZey8J2Yg_Cdl67wnZe7IPCdl53wnZiG8J2XvPCdmIHwnZe2IPCdl5vwnZe88J2YgPCdl73wnZe28J2YgfCdl67wnZe5IC0gQmVzdCBIb3NwaXRhbCB8RW1lcmdlbmN5IEhvc3BpdGFsIGluIEFsbGFoYWJhZCB8TGFwYXJvc2NvcGljIFN1cmdlb24gJiBIZXJuaWE!5e0!3m2!1sen!2sin!4v1785266562722!5m2!1sen!2sin", // Map 2
  },
];

const Contact = () => {
  const [selected, setSelected] = useState(hospitals[0]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <p className="text-green-500 uppercase tracking-[6px] font-semibold mb-3">
          Get In Touch
        </p>

        <h2 className="text-5xl font-bold text-blue-950">
          Hospital Location & Contact
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl">
          Select your preferred hospital to view its location,
          contact details and clinic timings.
        </p>

        {/* Hospital Cards */}

        <div className="grid md:grid-cols-2 gap-6 mt-12">

          {hospitals.map((hospital) => (

            <button
              key={hospital.id}
              onClick={() => setSelected(hospital)}
              className={`group rounded-2xl p-6 border-2 transition-all duration-300 text-left

              ${selected.id === hospital.id
                  ? "bg-blue-950 border-blue-950 text-white shadow-xl"
                  : "bg-white border-gray-200 hover:border-green-500 hover:-translate-y-1"
                }`}
            >

              <div className="flex items-center gap-4">

                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl

                  ${selected.id === hospital.id
                      ? "bg-green-500 text-white"
                      : "bg-blue-950 text-green-500"
                    }`}
                >
                  <FaHospital />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    {hospital.name}
                  </h3>

                  {/* <p
                    className={`mt-1 ${
                      selected.id === hospital.id
                        ? "text-gray-300"
                        : "text-gray-500"
                    }`}
                  >
                    {hospital.branch}
                  </p> */}
                </div>

              </div>

            </button>

          ))}

        </div>

        {/* Details */}

        <div className="grid lg:grid-cols-3 gap-8 mt-12">

          {/* Map */}

          <div className="lg:col-span-2 rounded-3xl overflow-hidden border shadow-lg h-[550px]">

            <iframe
              src={selected.map}
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>




          {/* Contact */}

          <div className="space-y-5">

            <div className="border rounded-2xl p-6 flex gap-5 hover:shadow-lg transition">

              <div className="w-16 h-16 rounded-xl bg-blue-950 flex items-center justify-center text-green-500 text-2xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4 className="font-bold text-blue-950 text-xl">
                  Address
                </h4>

                <p className="text-gray-600 mt-2">
                  {selected.address}
                </p>
              </div>

            </div>

            <div className="border rounded-2xl p-6 flex gap-5 hover:shadow-lg transition">

              <div className="w-16 h-16 rounded-xl bg-blue-950 flex items-center justify-center text-green-500 text-2xl">
                <FaPhoneAlt />
              </div>

              <div>
                <h4 className="font-bold text-blue-950 text-xl">
                  Phone
                </h4>

                <p className="text-gray-600 mt-2">
                  {selected.phone}
                </p>
              </div>

            </div>

            <div className="border rounded-2xl p-6 flex gap-5 hover:shadow-lg transition">

              <div className="w-16 h-16 rounded-xl bg-blue-950 flex items-center justify-center text-green-500 text-2xl">
                <FaEnvelope />
              </div>

              <div>
                <h4 className="font-bold text-blue-950 text-xl">
                  Email
                </h4>

                <p className="text-gray-600 mt-2 break-all">
                  {selected.email}
                </p>
              </div>

            </div>

            <div className="border rounded-2xl p-6 flex gap-5 hover:shadow-lg transition">

              <div className="w-16 h-16 rounded-xl bg-blue-950 flex items-center justify-center text-green-500 text-2xl">
                <FaClock />
              </div>

              <div>
                <h4 className="font-bold text-blue-950 text-xl">
                  Clinic Hours
                </h4>

                <p className="text-gray-600 mt-2">
                  {selected.timing}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;