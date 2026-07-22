import { CalendarDays, PhoneCall, MapPin } from "lucide-react";

export default function AppointmentCTA() {
  return (
    <section className="bg-[#071B38] pb-20">
      <div className="max-w-7xl mx-auto px-5">

        <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">

          {/* Background Image */}
          <img
            src="/images/knee-bg.png"
            alt=""
            className="absolute right-0 top-0 h-full w-[280px] object-cover hidden lg:block"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-white/70"></div>

          <div className="relative grid lg:grid-cols-3 gap-8 p-8 lg:p-10">

            {/* Appointment */}

            <div className="flex items-start gap-5 lg:border-r border-slate-200">

              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">

                <CalendarDays
                  size={32}
                  className="text-[#0B2E69]"
                />

              </div>

              <div>

                <h3 className="text-xl font-bold text-slate-800">
                  Book Your Appointment
                </h3>

                <p className="mt-2 text-slate-500 leading-relaxed">
                  Take the first step towards a pain-free life.
                  Consult our orthopedic specialist today.
                </p>

              </div>

            </div>

            {/* Phone */}

            <div className="flex items-start gap-5 lg:border-r border-slate-200">

              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">

                <PhoneCall
                  size={30}
                  className="text-[#0B2E69]"
                />

              </div>

              <div>

                <h3 className="text-3xl font-bold text-slate-800">
                  7983437886
                </h3>

                <p className="mt-2 text-slate-500">
                  Call us for more details
                </p>
              </div>

            </div>

            {/* Address */}

            <div className="flex items-start gap-5">

              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">

                <MapPin
                  size={30}
                  className="text-[#0B2E69]"
                />

              </div>

              <div>

                <h3 className="text-xl font-bold text-slate-800">
                  Jeevan Jyoti Hospital
                </h3>

                <p className="mt-2 text-slate-500 leading-relaxed">
                  162, Haima Kutir Road,
                  Rambagh, Prayagraj,
                  Uttar Pradesh - 211003
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}